import http from "http";

const userData = [
    {
        id: 101,
        name: "Abc",
        email: "cm@abes.call.in"
    }
];

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    // GET /msg
    if (url === "/msg" && method === "GET") {

        res.end("This is welcome message from server");

    }

    // GET /sys
    else if (url === "/sys" && method === "GET") {

        res.end("This is system information");

    }

    // GET /data
    else if (url === "/data" && method === "GET") {

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(userData));

    }

    // POST /create
    else if (url === "/create" && method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const newData = JSON.parse(body);

            const newUserData = {
                id: newData.id,
                name: newData.name,
                email: newData.email
            };

            userData.push(newUserData);

            res.end("User created successfully");
        });

    }

    // GET /users
    else if (url === "/users" && method === "GET") {

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(userData));

    }

    // GET /users/:id
    else if (url.startsWith("/users/") && method === "GET") {

        const id = url.split("/")[2];

        const user = userData.find((u) => u.id == id);

        if (!user) {
            return res.end("User not found");
        }

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(user));

    }

    // DELETE /delete/:id
    else if (url.startsWith("/delete/") && method === "DELETE") {

        const id = url.split("/")[2];

        const index = userData.findIndex((u) => u.id == id);

        if (index === -1) {
            return res.end("Data not found");
        }

        userData.splice(index, 1);

        res.end("Data deleted successfully");

    }

    // If route doesn't exist
    else {

        res.statusCode = 404;
        res.end("Route not found");

    }
});

server.listen(4000, () => {
    console.log("Server is running on port number 4000");
});