export interface Region {
    id: string;
    name: string;
}

export interface PriceEntry {
    amount: number;
    price: number;
    time: Date;
}

export interface AuctionPriceHistory {
    total: number;
    prices: PriceEntry[];
}

export interface Lot {
    itemId: string;
    startPrice: number;
    currentPrice?: number;
    buyoutPrice: number;
    startTime: Date;
    endTime: Date;
    additional: object

}

export interface AuctionLots {
    total: number;
    lots: Lot[];
}

export interface CharacterMetaInfo {
    id: string;
    name: string;
    creationTime: Date;
}

export interface CharacterInfo {
    information: CharacterMetaInfo;
    clan?: CharacterClanInfo;
}

export interface ClanInfo {
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
export interface ClanMember {
    name: string;
    rank: ClanRank;
    joinTime: Date;
}

export interface CharacterClanInfo {
    info: ClanInfo;
    member: ClanMember;
}

export interface ClansList {
    total: number;
    data: ClanInfo[];
}

export interface EmissionInfo {
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