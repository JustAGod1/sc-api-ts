"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.StalcraftUserClient = exports.StalcraftAppClient = exports.getListOfRegions = exports.DEMO_USER_TOKEN = exports.DEMO_APP_TOKEN = exports.BASE_URL = exports.DEMO_URL = void 0;
exports.DEMO_URL = 'https://dapi.stalcraft.net';
exports.BASE_URL = 'https://eapi.stalcraft.net';
exports.DEMO_APP_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwibmJmIjoxNjczNzk3ODM4LCJleHAiOjQ4MjczOTc4MzgsImlhdCI6MTY3Mzc5NzgzOCwianRpIjoiYXhwbzAzenJwZWxkMHY5dDgzdzc1N2x6ajl1MmdyeHVodXVlb2xsZ3M2dml1YjVva3NwZTJ3eGFrdjJ1eWZxaDU5ZDE2ZTNlN2FqdW16Z3gifQ.ZNSsvwAX72xT5BzLqqYABuH2FGbOlfiXMK5aYO1H5llG51ZjcPvOYBDRR4HUoPZVLFY8jyFUsEXNM7SYz8qL9ePmLjJl6pib8FEtqVPmf9ldXvKkbaaaSp4KkJzsIEMY_Z5PejB2Vr-q-cL13KPgnLGUaSW-2X_sHPN7VZJNMjRgjw4mPiRZTe4CEpQq0BEcPrG6OLtU5qlZ6mLDJBjN2xtK0DI6xgmYriw_5qW1mj1nqF_ewtUiQ1KTVhDgXnaNUdkGsggAGqyicTei0td6DTKtnl3noD5VkipWn_CwSqb2Mhm16I9BPfX_d5ARzWrnrwPRUf6PA_7LipNU6KkkW0mhZfmwEPTm_sXPus0mHPENoVZArdFT3L5sOYBcpqwvVIEtxRUTdcsKp-y-gSzao5muoyPVoCc2LEeHEWx0cIi9spsZ46SPRQpN4baVFp7y5rp5pjRsBKHQYUJ0lTmh1_vyfzOzbtNN2v6W_5w9JTLrN1U6fhmifvKHppFSEqD6DameL1TC59kpIdufRkEU9HE4O-ErEf1GuJFRx-Dew6XDvb_ExhvEqcw31yNvKzpVqLYJfLazqn6tUbVuAiPwpy6rP9tYO2taT1vj5TGn_vxwDu9zoLWe796tFMPS-kmbCglxB5C9L4EbpfWNbWxYjUkTvjT2Ml9OnrB0UbYo1jI';
exports.DEMO_USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwic3ViIjoiMSIsIm5iZiI6MTY3Mzc5NzgzOCwiZXhwIjo0ODI3Mzk3ODM4LCJpYXQiOjE2NzM3OTc4MzgsImp0aSI6IjJlamRwOG54a3A1djRnZWdhbWVyeWlkMW5ic24zZDhpZ2oyejgzem1vMDYzNjNoaXFkNWhwOTY1MHZwdWh4OXEybXBmd2hnbnUxNHR5cmp2In0.Ocw4CzkkuenkAOjkAR1RuFgLqix7VJ-8vWVS3KAJ1T3SgIWJG145xqG2qms99knu5azn_oaoeyMOXhyG_fuMQFGOju317GiS6pAXAFGOKvxcUCfdpFcEHO6TWGM8191-tlfV-0rAqCi62gprKyr-SrUG3nUJhv6XKegja_vYVujRVx0ouAaDvDKawiOssG5If_hXGhdhnmb3_7onnIc4hFsm4i9QVkWXe8GO6OsS999ZIX0ClNhTk2kKKTl2dDVIiKha_HB1aghm_LOYoRgb3i3B_DH4UO312rHYR5I4qO43c8x-TW7NwovItDSzhiCmcxZuUUeAUF3yFr5ovaR4fMj1LEy3y3V2piQDKPwmBOpI9S6OzWUIBJYcRYlT2HIrWCRc0YvM7AOGoxcH2Gf4ncqcF_M8fw7IMKf3pdnuxf1EbdEpzOapBD1Pw065em-U8PN4LVzw9lhIHx_Yj69qaFEx7Bhw3BCwsrx-o9hgg7T1TOV6kF11YfR99lIuj9z96XBLg5ipt-M_j7nHRoHWhM0Rc6uLIKPg0In0xYkybSfWG6v3Hs6kwgB7wkqpXpoVQltJvlqjtlf9Pp4zmkqlWQHx9as4xsgoTAQyCgaC0kisICNC58_g3QrJAfoFXW68x-OHlRKCAPqoR9V-0cVs-B83szaFmsEGegAttFLlDhE';
function getListOfRegions(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + '/regions')
                        .then(function (response) { return response.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getListOfRegions = getListOfRegions;
var StalcraftClient = /** @class */ (function () {
    function StalcraftClient(token, baseUrl) {
        if (typeof token === 'function') {
            this.tokenFetcher = token;
        }
        else {
            this.cachedToken = token;
        }
        this.baseUrl = baseUrl;
    }
    StalcraftClient.prototype.map_response = function (response) {
        if (response.status === 200) {
            return response;
        }
        else {
            throw new Error(response.statusText);
        }
    };
    StalcraftClient.prototype.request = function (path, args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, first, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this.cachedToken) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.tokenFetcher()];
                    case 1:
                        _a.cachedToken = _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.doRequest(path, args)];
                    case 3:
                        first = _c.sent();
                        if (!(first.status === 200)) return [3 /*break*/, 4];
                        return [2 /*return*/, first];
                    case 4:
                        if (!(first.status === 401)) return [3 /*break*/, 8];
                        if (!this.tokenFetcher) return [3 /*break*/, 6];
                        _b = this;
                        return [4 /*yield*/, this.tokenFetcher()];
                    case 5:
                        _b.cachedToken = _c.sent();
                        _c.label = 6;
                    case 6: return [4 /*yield*/, this.doRequest(path, args).then(this.map_response)];
                    case 7: return [2 /*return*/, _c.sent()];
                    case 8:
                        this.map_response(first);
                        _c.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    StalcraftClient.prototype.doRequest = function (path, args) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _i, _a, name_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = new URL(this.baseUrl);
                        url.pathname = path;
                        for (_i = 0, _a = Object.getOwnPropertyNames(args); _i < _a.length; _i++) {
                            name_1 = _a[_i];
                            url.searchParams.append(name_1, args[name_1]);
                        }
                        return [4 /*yield*/, fetch(url.toString(), {
                                headers: {
                                    'Authorization': 'Bearer ' + this.cachedToken
                                }
                            })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return StalcraftClient;
}());
function into(obj) {
    var result = {};
    for (var _i = 0, _a = Object.getOwnPropertyNames(obj); _i < _a.length; _i++) {
        var name_2 = _a[_i];
        result[name_2] = obj[name_2].toString();
    }
    return result;
}
var StalcraftAppClient = /** @class */ (function (_super) {
    __extends(StalcraftAppClient, _super);
    function StalcraftAppClient(url, token) {
        if (url === void 0) { url = exports.BASE_URL; }
        return _super.call(this, token, url) || this;
    }
    StalcraftAppClient.fromSecret = function (clientId, clientSecret, url) {
        var _this = this;
        if (url === void 0) { url = exports.BASE_URL; }
        return new StalcraftAppClient(url, function () { return __awaiter(_this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://exbo.net/oauth/token', {
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
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json.access_token];
                }
            });
        }); });
    };
    StalcraftAppClient.prototype.getAuctionPriceHistory = function (regionId, itemId, parameters) {
        if (parameters === void 0) { parameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/auction/' + itemId + '/history', into(parameters))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftAppClient.prototype.getAuctionLots = function (regionId, itemId, parameters) {
        if (parameters === void 0) { parameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/auction/' + itemId + '/lots', into(parameters))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftAppClient.prototype.getClanInformation = function (regionId, clanId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/clan/' + clanId + '/info', {})];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftAppClient.prototype.getClansList = function (regionId, parameters) {
        if (parameters === void 0) { parameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/clans', into(parameters))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftAppClient.prototype.getEmissionInfo = function (regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/emission', {})];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return StalcraftAppClient;
}(StalcraftClient));
exports.StalcraftAppClient = StalcraftAppClient;
var StalcraftUserClient = /** @class */ (function (_super) {
    __extends(StalcraftUserClient, _super);
    function StalcraftUserClient(url, token) {
        if (url === void 0) { url = exports.BASE_URL; }
        return _super.call(this, url, token) || this;
    }
    StalcraftUserClient.prototype.getCharactersList = function (regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/characters', {})];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftUserClient.prototype.getClanMembers = function (regionId, clanId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/clan/' + clanId + '/members', {})];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StalcraftUserClient.prototype.getListOfFriends = function (regionId, characterName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('/' + regionId + '/friends/' + characterName, {})];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return StalcraftUserClient;
}(StalcraftAppClient));
exports.StalcraftUserClient = StalcraftUserClient;
