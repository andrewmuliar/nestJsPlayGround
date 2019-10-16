
const neo4j = require('neo4j-driver').v1;
const url = 'bolt://hobby-elikijibbjimgbkedkeclcbl.dbs.graphenedb.com:24786';
export const DB = neo4j.driver(url, neo4j.auth.basic('user-admin', 'b.07cUDad7z50R.FgfXA35jp8FHwzNU'));