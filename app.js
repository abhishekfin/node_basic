var fs = require("fs");


fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf-8',function(error,data){
        fs.writeFile('./stuff/writeMe2.txt',data)
    })
})
fs.unlink('./stuff/writeMe2.txt',function(){
    fs.rmdir('stuff');
})

//fs.unlinkSync("C:\\Users\\user\\Desktop\\node basic.txt");

fs.mkdirSync("abhi");
fs.rmdirSync("abhi");
fs.unlinkSync('writeMe.txt');

var readme = fs.readFileSync("readMe.txt",'utf-8')
fs.readFile("readMe.txt",'utf-8',function(error,data){
    console.log("abhi "+data);
   // fs.writeFile('writeme1.txt',data);
})
console.log('file not loaded');

fs.writeFileSync("writeMe.txt",readme);
