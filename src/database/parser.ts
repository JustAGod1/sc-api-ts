import {Item, ItemEntry} from "./model";
import {Buffer} from "buffer";

/**
 * Represents a repository that contains the database
 * This is an interface that can be implemented by different repositories
 */
interface DatabaseRepository {
    /**
     * Gets a resource from the repository
     * @param path relative path to the resource including the file name and extension
     */
    getResource(path: string): Promise<string>
}

const GITHUB_API_URL = 'https://api.github.com/repos/EXBO-Studio/stalcraft-database/contents/'

/**
 * Repesents a repository that is hosted on github
 */
export class GithubRepository implements DatabaseRepository {
    async getResource(path: string): Promise<string> {
        let url = new URL(GITHUB_API_URL)
        url.pathname += path
        return await fetch(url.toString(),
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
            ).then(async (response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                } else {
                    const v = Buffer.from((await response.json()).content, 'base64').toString('utf8');
                    return v
                }
            }
        )
    }
}

export class StalcraftDatabase {
    private readonly repository: DatabaseRepository
    private readonly realm: string

    constructor(repository: DatabaseRepository, realm: string) {
        this.repository = repository
        this.realm = realm
    }

    /**
     * Gets the list of all items in the database
     */
    async getItemEntries(): Promise<ItemEntry[]> {
        let data = await this.repository.getResource(this.realm + '/listing.json')
        return JSON.parse(data)
    }

    /**
     * Gets the full information about an item
     * @param entry the item entry from getItemEntries
     */
    async getItemInfo(entry: ItemEntry) : Promise<Item> {
        let data = await this.repository.getResource(this.realm + entry.data)
        return JSON.parse(data)
    }

}