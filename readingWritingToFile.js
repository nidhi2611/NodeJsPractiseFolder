const fs = require('fs');

// --writing file---
// fs.writeFileSync("hello.txt","nidhi gupta is my name"); 

// // --writing file async---
// const stream = fs.WriteStream("hello2.txt");
// stream.write("heeelooo mani");

// // ---reading file async --
// const reader = fs.readFileSync("hello.txt"); 
// console.log(reader.toString('utf-8'));

// -------Getting Input From Command Line-------------
//run node readingWritingToFile.js addFile helloWorldFile.txt Hi_Nidhi_Welcome_to_Node_js_world to addFile
//run node readingWritingToFile.js deleteFile helloWorldFile.txt to deleteFile
const input = process.argv;

if (input[2] == "addFile"){
    console.log("File added");
    fs.writeFileSync(input[3],input[4])
}
else if(input[2] == "deleteFile"){
    console.log("File deleted");
    fs.unlinkSync(input[3])
}else{
    console.log("INVALID INPUT");
}