import {expect, test} from '@jest/globals';
import {GithubRepository, StalcraftDatabase} from "./parser";

let database = new StalcraftDatabase(new GithubRepository(), 'global')
test('test getItemEntries', () => {
    return database.getItemEntries().then((data) => {
        console.log(data)
        expect(data.length).toBeGreaterThan(0);
    });
});

test('test getItemInfo', () => {
    return database.getItemEntries().then((data) => {
        const entry = data[0]
        let item = database.getItemInfo(entry)
        console.log(item)
    });
});
