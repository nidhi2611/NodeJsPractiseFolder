const http =  require('http');

// -------Creating A Server------
// http.createServer((re,res)=>{
//     res.write("Heelo this is nidhi");
//     res.end();
// }).listen(4500);


//-----Creating A Server and calling a function in it------
// function generateData(req,res){
//     res.write("Hello i am function call");
//     res.end();
// }
// http.createServer(generateData).listen(3000);

//------Creating a basic API with static API--------
const data = [
    { name: 'Nidhi Gupta', email: 'nidhi26@gmail.com', graduationYear: '2022', company: 'VMware India Pvt Ltd' },
    { name: 'Urvi Sharma', email: 'urvi2312@gmail.com', graduationYear: '2022', company: 'MAQ Software' },
    { name: 'anshikabansal', email: 'bansalanshika@gmail.com', graduationYear: '2022', company: 'VMware India Pvt Ltd' }
];
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);


