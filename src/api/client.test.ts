import {expect, test} from '@jest/globals';
import {
    DEMO_APP_TOKEN,
    DEMO_URL,
    DEMO_USER_TOKEN,
    getListOfRegions,
    StalcraftAppClient,
    StalcraftUserClient
} from "./client";
import {Sort} from "./model";

test('test getListOfRegions', () => {
    return getListOfRegions(DEMO_URL).then((data) => {
        expect(data.length).toBeGreaterThan(0);
    });
});

let app = new StalcraftAppClient(DEMO_URL, DEMO_APP_TOKEN);
test('test getAuctionPriceHistory', async () => {
    return app.getAuctionLots("RU", "3grl").then((data) => {
        expect(data.lots.length).toBeGreaterThan(0);
    });
});

test('test fail', async () => {
    let body = async () => {
        await app.getAuctionLots("RY", "3gr").then((data) => {
            console.log(data)
            expect(data.lots.length).toBeGreaterThan(0);
        })
    }
    await expect(body).rejects.toThrow();

});

test('test getAuctionLots', async () => {
    return app.getAuctionLots("RU", "3grl").then((data) => {
        expect(data.lots.length).toBeGreaterThan(0);
    });
});

test('test getClanInformation', async () => {
    return app.getClanInformation("RU", "647d6c53-b3d7-4d30-8d08-de874eb1d845").then((data) => {
        expect(data.memberCount).toBeGreaterThan(0);
    });
});

test('test getClansList', async () => {
    return app.getClansList("RU").then((data) => {
        expect(data.data.length).toBeGreaterThan(0);
    });
});

test('test getEmissionInfo', async () => {
    return app.getEmissionInfo("RU")
});

let user = new StalcraftUserClient(DEMO_URL, DEMO_USER_TOKEN);
test('test getCharactersList', async () => {
    return user.getCharactersList("RU").then((data) => {
        expect(data.length).toBeGreaterThan(0);
    });
});

test('test getClanMembers', async () => {
    return user.getClanMembers("RU", "647d6c53-b3d7-4d30-8d08-de874eb1d845").then((data) => {
        expect(data.length).toBeGreaterThan(0);
    });
});

test('test getListOfFriends', async () => {
    return user.getListOfFriends("RU", "Test-1").then((data) => {
        expect(data.length).toBeGreaterThan(0);
    });
});

test('test getAuctionLots.Sort', async () => {
    return user.getAuctionLots("RU", "3grl", {sort: Sort.BUYOUT_PRICE}).then((data) => {
        expect(data.lots.length).toBeGreaterThan(0);
    });
});