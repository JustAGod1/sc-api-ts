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
exports.StalcraftDatabase = exports.GithubRepository = void 0;
var buffer_1 = require("buffer");
var GITHUB_API_URL = 'https://api.github.com/repos/EXBO-Studio/stalcraft-database/contents/';
/**
 * Repesents a repository that is hosted on github
 */
var GithubRepository = /** @class */ (function () {
    function GithubRepository() {
    }
    GithubRepository.prototype.getResource = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL(GITHUB_API_URL);
                        url.pathname += path;
                        return [4 /*yield*/, fetch(url.toString(), {
                                headers: {
                                    'Accept': 'application/vnd.github.v3+json'
                                }
                            }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var v, _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!!response.ok) return [3 /*break*/, 1];
                                            throw new Error(response.statusText);
                                        case 1:
                                            _b = (_a = buffer_1.Buffer).from;
                                            return [4 /*yield*/, response.json()];
                                        case 2:
                                            v = _b.apply(_a, [(_c.sent()).content, 'base64']).toString('utf8');
                                            return [2 /*return*/, v];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return GithubRepository;
}());
exports.GithubRepository = GithubRepository;
var StalcraftDatabase = /** @class */ (function () {
    function StalcraftDatabase(repository, realm) {
        this.repository = repository;
        this.realm = realm;
    }
    /**
     * Gets the list of all items in the database
     */
    StalcraftDatabase.prototype.getItemEntries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getResource(this.realm + '/listing.json')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, JSON.parse(data)];
                }
            });
        });
    };
    /**
     * Gets the full information about an item
     * @param entry the item entry from getItemEntries
     */
    StalcraftDatabase.prototype.getItemInfo = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getResource(this.realm + entry.data)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, JSON.parse(data)];
                }
            });
        });
    };
    return StalcraftDatabase;
}());
exports.StalcraftDatabase = StalcraftDatabase;
