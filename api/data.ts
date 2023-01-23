export class Region {
    id: string;
    name: string;
}

export class PriceEntry {
    amount: number;
    price: number;
    time: Date;
}

export class AuctionPriceHistory {
    total: number;
    prices: PriceEntry[];
}

export class Lot {
    itemId: string;
    startPrice: number;
    currentPrice?: number;
    buyoutPrice: number;
    startTime: Date;
    endTime: Date;
    additional: object

}

export class AuctionLots {
    total: number;
    lots: Lot[];
}

export class CharacterMetaInfo {
    id: string;
    name: string;
    creationTime: Date;
}

export class CharacterInfo {
    information: CharacterMetaInfo;
    clan?: CharacterClanInfo;
}

export class ClanInfo {
    id: string;
    name: string;
    tag: string;
    level: number;
    levelPoints: number;
    registrationTime: Date;
    alliance?: string;
    description: string;
    leader: string
    memberCount: number;
}

enum ClanRank {
    RECRUIT = "RECRUIT",
    COMMONER = "COMMONER",
    SOLDIER = "SOLDIER",
    SERGEANT = "SERGEANT",
    OFFICER = "OFFICER",
    COLONEL = "COLONEL",
    LEADER = "LEADER"
}
export class ClanMember {
    name: string;
    rank: ClanRank;
    joinTime: Date;
}

export class CharacterClanInfo {
    info: ClanInfo;
    member: ClanMember;
}

export class ClansList {
    total: number;
    data: ClanInfo[];
}

export class EmissionInfo {
    currentStart?: Date;
    previousStart?: Date;
    previousEnd?: Date;
}

export enum Sort {
    TIME_CREATED = "time_created",
    TIME_LEFT = "time_left",
    CURRENT_PRICE = "current_price",
    BUYOUT_PRICE = "buyout_price",
}

export enum Order {
    ASC = "asc",
    DESC = "desc",
}