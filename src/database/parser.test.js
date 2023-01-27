"use strict";
exports.__esModule = true;
var globals_1 = require("@jest/globals");
var parser_1 = require("./parser");
var database = new parser_1.StalcraftDatabase(new parser_1.GithubRepository(), 'global');
(0, globals_1.test)('test getItemEntries', function () {
    return database.getItemEntries().then(function (data) {
        console.log(data);
        (0, globals_1.expect)(data.length).toBeGreaterThan(0);
    });
});
(0, globals_1.test)('test getItemInfo', function () {
    return database.getItemEntries().then(function (data) {
        var entry = data[0];
        var item = database.getItemInfo(entry);
        console.log(item);
    });
});
