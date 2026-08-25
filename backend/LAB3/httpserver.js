import http from "http";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello Server.");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port number 3000");
});