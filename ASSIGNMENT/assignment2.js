import http from "http";
import fs from "fs";

const file = "./users.json";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == "/users" && method == "GET") {
        const data = fs.readFileSync(file, "utf-8");
        res.end(data);
    }
    else if (url == "/users" && method == "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const users = JSON.parse(fs.readFileSync(file, "utf-8"));
            const newUser = JSON.parse(body);

            users.push(newUser);

            fs.writeFileSync(file, JSON.stringify(users, null, 2));

            res.end("User created");
        });
    }
    else if (url.startsWith("/users/") && method == "PUT") {
        const id = url.split("/")[2];
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const users = JSON.parse(fs.readFileSync(file, "utf-8"));
            const data = JSON.parse(body);

            const user = users.find((u) => u.id == id);

            if (!user) {
                return res.end("User not found");
            }

            user.name = data.name;
            user.email = data.email;

            fs.writeFileSync(file, JSON.stringify(users, null, 2));

            res.end("User updated");
        });
    }

    else if (url.startsWith("/users/") && method == "DELETE") {
        const id = url.split("/")[2];

        let users = JSON.parse(fs.readFileSync(file, "utf-8"));

        users = users.filter((u) => u.id != id);

        fs.writeFileSync(file, JSON.stringify(users, null, 2));

        res.end("User deleted");
    }

    else {
        res.end("Invalid request");
    }
});

server.listen(3005, () => {
    console.log("Server running on port 3005");
});
