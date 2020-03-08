"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_sql_parser_1 = require("node-sql-parser");
var fs = __importStar(require("fs"));
var INDENT = '  ';
var SEMICOLON = ';';
var DIRECTION = 'BT';
var parser = new node_sql_parser_1.Parser();
var dir = process.argv[process.argv.length - 1];
var files = fs.readdirSync(dir);
console.log("graph " + DIRECTION + SEMICOLON);
files.forEach(function (file) {
    var viewname = file.split('.')[0];
    var data = fs.readFileSync("" + dir + viewname + ".sql");
    var view = parser.astify(data.toString());
    view.from.forEach(function (from) {
        console.log("" + INDENT + viewname + "-->" + from.table + SEMICOLON);
    });
});
