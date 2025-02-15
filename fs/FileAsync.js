const path = require("path");
const fs = require("fs");

const Filename = "DataAsync.txt";
const Filepath = path.join(__dirname, Filename);

//WriteFile
fs.writeFile(Filepath, "This is first comment", "utf-8", (err) => {
  if (err) console.error(err);
});

//ReadFile
fs.readFile(Filepath, "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

//AppendFile
fs.appendFile(Filepath, "\nThis is second line", (err) => {
  if (err) console.error(err);
});

//Deletefile
fs.unlink(Filepath, (err) => {
  if (err) console.error(err);
});
