import {Item, ItemEntry} from "./model";

interface DatabaseRepository {
    getResource(path: string): Promise<string>
}

const GITHUB_API_URL = 'https://api.github.com/repos/EXBO-Studio/stalcraft-database/contents/'

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
                    console.log(v)
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

    async getItemEntries(): Promise<ItemEntry[]> {
        let data = await this.repository.getResource(this.realm + '/listing.json')
        return JSON.parse(data)
    }
    async getItemInfo(entry: ItemEntry) : Promise<Item> {
        let data = await this.repository.getResource(this.realm + entry.data)
        return JSON.parse(data)
    }

}