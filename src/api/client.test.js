"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var globals_1 = require("@jest/globals");
var client_1 = require("./client");
var model_1 = require("./model");
(0, globals_1.test)('test getListOfRegions', function () {
    return (0, client_1.getListOfRegions)(client_1.DEMO_URL).then(function (data) {
        (0, globals_1.expect)(data.length).toBeGreaterThan(0);
    });
});
var app = new client_1.StalcraftAppClient(client_1.DEMO_URL, client_1.DEMO_APP_TOKEN);
(0, globals_1.test)('test getAuctionPriceHistory', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, app.getAuctionLots("RU", "3grl").then(function (data) {
                (0, globals_1.expect)(data.lots.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test fail', function () { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, app.getAuctionLots("RY", "3gr").then(function (data) {
                                    console.log(data);
                                    (0, globals_1.expect)(data.lots.length).toBeGreaterThan(0);
                                })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, (0, globals_1.expect)(body).rejects.toThrow()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, globals_1.test)('test getAuctionLots', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, app.getAuctionLots("RU", "3grl").then(function (data) {
                (0, globals_1.expect)(data.lots.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getClanInformation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, app.getClanInformation("RU", "647d6c53-b3d7-4d30-8d08-de874eb1d845").then(function (data) {
                (0, globals_1.expect)(data.memberCount).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getClansList', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, app.getClansList("RU").then(function (data) {
                (0, globals_1.expect)(data.data.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getEmissionInfo', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, app.getEmissionInfo("RU")];
    });
}); });
var user = new client_1.StalcraftUserClient(client_1.DEMO_URL, client_1.DEMO_USER_TOKEN);
(0, globals_1.test)('test getCharactersList', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, user.getCharactersList("RU").then(function (data) {
                (0, globals_1.expect)(data.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getClanMembers', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, user.getClanMembers("RU", "647d6c53-b3d7-4d30-8d08-de874eb1d845").then(function (data) {
                (0, globals_1.expect)(data.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getListOfFriends', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, user.getListOfFriends("RU", "Test-1").then(function (data) {
                (0, globals_1.expect)(data.length).toBeGreaterThan(0);
            })];
    });
}); });
(0, globals_1.test)('test getAuctionLots.Sort', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, user.getAuctionLots("RU", "3grl", { sort: model_1.Sort.BUYOUT_PRICE }).then(function (data) {
                (0, globals_1.expect)(data.lots.length).toBeGreaterThan(0);
            })];
    });
}); });
var clientId = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;
if (clientId && clientSecret) {
    (0, globals_1.test)('test token fetcher', function () { return __awaiter(void 0, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = client_1.StalcraftAppClient.fromSecret(clientId, clientSecret);
            return [2 /*return*/, client.getAuctionLots("RU", "3grl").then(function (data) {
                    console.log(data);
                    (0, globals_1.expect)(data.lots.length).toBeGreaterThan(0);
                })];
        });
    }); });
}
