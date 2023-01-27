"use strict";
exports.__esModule = true;
exports.Order = exports.Sort = void 0;
var ClanRank;
(function (ClanRank) {
    ClanRank["RECRUIT"] = "RECRUIT";
    ClanRank["COMMONER"] = "COMMONER";
    ClanRank["SOLDIER"] = "SOLDIER";
    ClanRank["SERGEANT"] = "SERGEANT";
    ClanRank["OFFICER"] = "OFFICER";
    ClanRank["COLONEL"] = "COLONEL";
    ClanRank["LEADER"] = "LEADER";
})(ClanRank || (ClanRank = {}));
var Sort;
(function (Sort) {
    Sort["TIME_CREATED"] = "time_created";
    Sort["TIME_LEFT"] = "time_left";
    Sort["CURRENT_PRICE"] = "current_price";
    Sort["BUYOUT_PRICE"] = "buyout_price";
})(Sort = exports.Sort || (exports.Sort = {}));
var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order = exports.Order || (exports.Order = {}));
