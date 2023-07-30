const http = require("http");
const fs = require("fs");

const serveError = (res,statusCode,message)=>{
    res.writeHead(statusCode,{"Content-Type":"text/html"})
    res.end(`<h1>${message}</h1>`)
}

const handleRequest = (req,res)=>{
    const filePath = req.url === "/" ? "index.html":`./${req.url}.html`
    console.log(filePath)
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            serveError(res,404,"Page not found");
        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data);
        }
    })
}

const server = http.createServer(handleRequest)
server.listen(3001,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Listening at port 3001")
        
    }
})