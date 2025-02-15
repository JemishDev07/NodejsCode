const path = require("path");
const fs = require("fs");

const Filename = "DataSyns.txt";
const Filepath = path.join(__dirname, Filename);

//WriteFile
const WriteData = fs.writeFileSync(Filepath, "This is intial data", "utf-8");
console.log(WriteData);

//ReadFile
const ReadData = fs.readFileSync(Filepath, "utf-8");
// console.log(ReadData);

//AppendFile
const AppendData = fs.appendFileSync(
  Filepath,
  "\nThis is updated data 2",
  "utf-8"
);
console.log(AppendData);

//DeleteFile
// const DeleteFile = fs.unlinkSync(Filepath);
// console.log(DeleteFile);
