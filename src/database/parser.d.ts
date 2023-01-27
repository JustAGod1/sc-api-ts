import { Item, ItemEntry } from "./model";
/**
 * Represents a repository that contains the database
 * This is an interface that can be implemented by different repositories
 */
interface DatabaseRepository {
    /**
     * Gets a resource from the repository
     * @param path relative path to the resource including the file name and extension
     */
    getResource(path: string): Promise<string>;
}
/**
 * Repesents a repository that is hosted on github
 */
export declare class GithubRepository implements DatabaseRepository {
    getResource(path: string): Promise<string>;
}
export declare class StalcraftDatabase {
    private readonly repository;
    private readonly realm;
    constructor(repository: DatabaseRepository, realm: string);
    /**
     * Gets the list of all items in the database
     */
    getItemEntries(): Promise<ItemEntry[]>;
    /**
     * Gets the full information about an item
     * @param entry the item entry from getItemEntries
     */
    getItemInfo(entry: ItemEntry): Promise<Item>;
}
export {};
