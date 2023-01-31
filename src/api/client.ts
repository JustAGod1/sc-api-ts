import {
    AuctionLots,
    AuctionPriceHistory, CharacterInfo,
    CharacterMetaInfo,
    ClanInfo, ClanMember,
    ClansList,
    EmissionInfo,
    Order,
    Region,
    Sort
} from './model';

export const DEMO_URL = 'https://dapi.stalcraft.net';
export const BASE_URL = 'https://eapi.stalcraft.net';

export const DEMO_APP_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwibmJmIjoxNjczNzk3ODM4LCJleHAiOjQ4MjczOTc4MzgsImlhdCI6MTY3Mzc5NzgzOCwianRpIjoiYXhwbzAzenJwZWxkMHY5dDgzdzc1N2x6ajl1MmdyeHVodXVlb2xsZ3M2dml1YjVva3NwZTJ3eGFrdjJ1eWZxaDU5ZDE2ZTNlN2FqdW16Z3gifQ.ZNSsvwAX72xT5BzLqqYABuH2FGbOlfiXMK5aYO1H5llG51ZjcPvOYBDRR4HUoPZVLFY8jyFUsEXNM7SYz8qL9ePmLjJl6pib8FEtqVPmf9ldXvKkbaaaSp4KkJzsIEMY_Z5PejB2Vr-q-cL13KPgnLGUaSW-2X_sHPN7VZJNMjRgjw4mPiRZTe4CEpQq0BEcPrG6OLtU5qlZ6mLDJBjN2xtK0DI6xgmYriw_5qW1mj1nqF_ewtUiQ1KTVhDgXnaNUdkGsggAGqyicTei0td6DTKtnl3noD5VkipWn_CwSqb2Mhm16I9BPfX_d5ARzWrnrwPRUf6PA_7LipNU6KkkW0mhZfmwEPTm_sXPus0mHPENoVZArdFT3L5sOYBcpqwvVIEtxRUTdcsKp-y-gSzao5muoyPVoCc2LEeHEWx0cIi9spsZ46SPRQpN4baVFp7y5rp5pjRsBKHQYUJ0lTmh1_vyfzOzbtNN2v6W_5w9JTLrN1U6fhmifvKHppFSEqD6DameL1TC59kpIdufRkEU9HE4O-ErEf1GuJFRx-Dew6XDvb_ExhvEqcw31yNvKzpVqLYJfLazqn6tUbVuAiPwpy6rP9tYO2taT1vj5TGn_vxwDu9zoLWe796tFMPS-kmbCglxB5C9L4EbpfWNbWxYjUkTvjT2Ml9OnrB0UbYo1jI'
export const DEMO_USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwic3ViIjoiMSIsIm5iZiI6MTY3Mzc5NzgzOCwiZXhwIjo0ODI3Mzk3ODM4LCJpYXQiOjE2NzM3OTc4MzgsImp0aSI6IjJlamRwOG54a3A1djRnZWdhbWVyeWlkMW5ic24zZDhpZ2oyejgzem1vMDYzNjNoaXFkNWhwOTY1MHZwdWh4OXEybXBmd2hnbnUxNHR5cmp2In0.Ocw4CzkkuenkAOjkAR1RuFgLqix7VJ-8vWVS3KAJ1T3SgIWJG145xqG2qms99knu5azn_oaoeyMOXhyG_fuMQFGOju317GiS6pAXAFGOKvxcUCfdpFcEHO6TWGM8191-tlfV-0rAqCi62gprKyr-SrUG3nUJhv6XKegja_vYVujRVx0ouAaDvDKawiOssG5If_hXGhdhnmb3_7onnIc4hFsm4i9QVkWXe8GO6OsS999ZIX0ClNhTk2kKKTl2dDVIiKha_HB1aghm_LOYoRgb3i3B_DH4UO312rHYR5I4qO43c8x-TW7NwovItDSzhiCmcxZuUUeAUF3yFr5ovaR4fMj1LEy3y3V2piQDKPwmBOpI9S6OzWUIBJYcRYlT2HIrWCRc0YvM7AOGoxcH2Gf4ncqcF_M8fw7IMKf3pdnuxf1EbdEpzOapBD1Pw065em-U8PN4LVzw9lhIHx_Yj69qaFEx7Bhw3BCwsrx-o9hgg7T1TOV6kF11YfR99lIuj9z96XBLg5ipt-M_j7nHRoHWhM0Rc6uLIKPg0In0xYkybSfWG6v3Hs6kwgB7wkqpXpoVQltJvlqjtlf9Pp4zmkqlWQHx9as4xsgoTAQyCgaC0kisICNC58_g3QrJAfoFXW68x-OHlRKCAPqoR9V-0cVs-B83szaFmsEGegAttFLlDhE'

export async function getListOfRegions(url: string) : Promise<Region[]> {
    return await fetch(url + '/regions')
        .then(response => response.json())
}

class StalcraftClient {
    private cachedToken: string;
    private tokenFetcher?: () => Promise<string>;
    private readonly baseUrl: string;

    constructor(token: string | (() => Promise<string>), baseUrl: string) {
        if (typeof token === 'function') {
            this.tokenFetcher = token;
        } else {
            this.cachedToken = token;
        }
        this.baseUrl = baseUrl;
    }


    map_response(response: Response) {
        if (response.status === 200) {
            return response
        } else {
            throw new Error(response.statusText);
        }
    }
    async request(path: string, args: { [key: string]: string}) {
        if (!this.cachedToken) {
            this.cachedToken = await this.tokenFetcher!()
        }
        let first = await this.doRequest(path, args)
        if (first.status === 200) {
            return first
        } else if (first.status === 401) {
            if (this.tokenFetcher) {
                this.cachedToken = await this.tokenFetcher()
            }
            return await this.doRequest(path, args).then(this.map_response)
        } else {
            this.map_response(first)
        }
    }
    async doRequest(path: string, args: { [key: string]: string}) {
        let url = new URL(this.baseUrl)
        url.pathname = path
        for (let name of Object.getOwnPropertyNames(args)) {
            url.searchParams.append(name, args[name])
        }

        return await fetch(url.toString(), {
            headers: {
                'Authorization': 'Bearer ' + this.cachedToken
            }
        })
    }
}

function into(obj: any) : {[key: string] : string}{
    let result = {} as any
    for (let name of Object.getOwnPropertyNames(obj)) {
        result[name] = obj[name].toString()
    }
    return result
}

export class StalcraftAppClient extends StalcraftClient {
    constructor(url: string = BASE_URL, token: string | (() => Promise<string>)) {
        super(token, url)
    }

    public static fromSecret(clientId: string, clientSecret: string, url: string = BASE_URL) {
        return new StalcraftAppClient(url, async () => {
            let response = await fetch( 'https://exbo.net/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: 'client_credentials',
                    scope: ''
                })
            })
            let json = await response.json()
            return json.access_token
        })
    }

    public async getAuctionPriceHistory(regionId: string, itemId: string, parameters: {offset? : number; limit?: number} = {}) : Promise<AuctionPriceHistory> {
        let response = await this.request('/' + regionId + '/auction/' + itemId + '/history', into(parameters))
        return await response.json()
    }

    public async getAuctionLots(regionId: string, itemId: string, parameters: {offset? : number; limit?: number, sort?: Sort, order?: Order} = {}) : Promise<AuctionLots> {
        let response = await this.request('/' + regionId + '/auction/' + itemId + '/lots', into(parameters))
        return await response.json()
    }

    public async getClanInformation(regionId: string, clanId: string) : Promise<ClanInfo> {
        let response = await this.request('/' + regionId + '/clan/' + clanId + '/info', {})
        return await response.json()
    }

    public async getClansList(regionId: string, parameters: {offset? : number; limit?: number} = {}) : Promise<ClansList> {
        let response = await this.request('/' + regionId + '/clans', into(parameters))
        return await response.json()
    }

    public async getEmissionInfo(regionId: string) : Promise<EmissionInfo> {
        let response = await this.request('/' + regionId + '/emission', {})
        return await response.json()
    }
}

export class StalcraftUserClient extends StalcraftAppClient {
    constructor(url: string = BASE_URL, token: string) {
        super(url, token)
    }

    public async getCharactersList(regionId: string) : Promise<CharacterInfo[]> {
        let response = await this.request('/' + regionId + '/characters', {})
        return await response.json()
    }
    public async getClanMembers(regionId: string, clanId: string) : Promise<ClanMember[]> {
        let response = await this.request('/' + regionId + '/clan/' + clanId + '/members', {})
        return await response.json()
    }

    public async getListOfFriends(regionId: string, characterName: string) : Promise<string[]> {
        let response = await this.request('/' + regionId + '/friends/' + characterName, {})
        return await response.json()
    }
}