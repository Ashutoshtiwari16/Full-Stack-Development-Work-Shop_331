import http from "http";
    const Port=3005;
    const userdata=[{id:1,name:"abc",email:"c.m@Abes.ac.com"}];
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method == "GET") {
        res.statusCode = 201;
        // res.setHeader("Content-Type", "text/plain");
        res.end("Welcome to user.");
    } else if( url=="/sys" && method == "GET") {
        res.statusCode = 201;
        // res.setHeader("Content-Type", "text/plain");
        res.end("This is system information");
    }
    else if (url == "/data" && method == "GET"){
        res.end(JSON.stringify(userdata));
    }
    else if(url=="/create" && method == "POST"){
        const body =" ";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const newdata =JSON.parse(body);
            const newUserdata = {
                id:newdata.id,
                name:newdata.name,
                email:newdata.email,
            }
            userdata.push(newuserdata)
            res.end("datacreatedforcefully")
            
        })
    }
});

server.listen(Port, () => {
    console.log(`Server is running on port number ${Port}`);
});