import { Parser } from 'node-sql-parser';
import * as fs from "fs";
const INDENT = '  ';
const SEMICOLON = ';'
const DIRECTION = 'BT';
const parser = new Parser();

const dir = process.argv[process.argv.length - 1];
const files = fs.readdirSync(dir);

console.log(`graph ${DIRECTION}${SEMICOLON}`);
files.forEach((file: string) => {
  const viewname = file.split('.')[0];
  const data = fs.readFileSync(`${dir}${viewname}.sql`);
  const view = parser.astify(data.toString()) as any;

  view.from.forEach((from: any) => {
    console.log(`${INDENT}${viewname}-->${from.table}${SEMICOLON}`);
  });
});
