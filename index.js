const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res)=>{

    switch(req.url){
        case '/file':
            // task 2
            fs.readFile("./data.txt","utf-8",(err,data)=>{
                if(err){
                    res.end("Not found")
                }else{
                    res.end(data)
                }
    
            })
        break;

        case '/api/user':
            // task 3
            const user = {name:"John doe",email:"johndoe@mail.com",age:23}
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify(user))
            break;
        default:
            // task 1
            res.end("Hello, Node.js")
    }
    
    
})

server.listen("3000",(err)=>{
    if(err){
        console.log(err)
    }else{
        
        console.log("Listening at port 3000")
    }
})