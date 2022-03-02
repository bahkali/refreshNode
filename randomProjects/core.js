const path = require("path");
const util = require("util");
const v8 = require("v8");
const { inc, dec, getCount } = require("./myModule");

//const dirUploads = path.join(__dirname, "public", "uploads");
// console.log(dirUploads);

util.log(path.basename(__filename));
util.log("^ The name of the current file");

// get the node core statistic

//util.log(v8.getHeapStatistics());

inc();
inc();
inc();
dec();

util.log(getCount());
