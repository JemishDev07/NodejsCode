//path module
const path = require("path");

console.log(__dirname);
console.log(__filename);

const Newpath = path.join("jemish", "music", "songs.txt");
console.log(Newpath);

const Parse = path.parse(Newpath);
const resolve = path.resolve(Newpath);
const extname = path.extname(Newpath);
const basename = path.basename(Newpath);
const pathsep = path.sep;

console.log({ Parse, resolve, extname, pathsep, basename });
