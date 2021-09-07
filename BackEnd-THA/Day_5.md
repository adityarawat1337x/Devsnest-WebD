var fs = require('fs'); - imports fs module
fs.mkdirSync('folderPath + name') - creates a folder
fs.writeFileSync('hello.md','content',(err)=>{ -creates a file with content
console.error(err);
})
fs.appendFileSync('hello.md',' new added')
fs.readFileSync('path') - reads file using buffer due to performance
fs.readFileSync('path','utf-8') - reads file using utf-8 encoding
fs.renameSync('hello.md','hello2.md'); - renames the file
fs.unlinkSync('hello.md') - deletes the file
fs.rmdirSync('folder+path') - deletes folder

REPL - read,execute,print,loop
