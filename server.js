"use strict";

const net = require("net");
const files = require("./files.js");
const PORT = 8080;

let date = "";
let body = "";

//this creates a server
const server = net.createServer(socket => {
  socket.on("data", chunk => {
    // read incoming data (incoming chunk is request header)
    console.log("data");
    console.log(chunk.toString());

    // parse the string
    let request = chunk.toString().slice(0, chunk.indexOf("H") - 1);
    console.log(request);

    // grab the right file
    if (request === "GET /index.html") {
      body = files.index;
      let response = `HTTP/1.1 200 OK
Server: localhost:8080
Date: ${date}
Content-Type: text/html;
Content-Length: ${body.length}

${body}`;
      socket.write(response);
      socket.end();
    } else if (request === "GET /hydrogen.html") {
      body = files.hydrogen;
      let response = `HTTP/1.1 200 OK
Server: localhost:8080
Date: ${date}
Content-Type: text/html;
Content-Length: ${body.length}

${body}`;
      socket.write(response);
      socket.end();
    } else if (request === "GET /helium.html") {
      body = files.helium;
      let response = `HTTP/1.1 200 OK
Server: localhost:8080
Date: ${date}
Content-Type: text/html;
Content-Length: ${body.length}

${body}`;
      socket.write(response);
      socket.end();
    } else if (request === "GET /notFound.html") {
      body = files.notFound;
      let response = `HTTP/1.1 404 NOT FOUND
Server: localhost:8080
Date: ${date}
Content-Type: text/html;
Content-Length: ${body.length}

${body}`;
      socket.write(response);
      socket.end();
    }

    socket.on("end", () => {
      // handle client disconnect
      console.log("Connection disconnected");
    });

    socket.on("error", err => {
      // handle error in connection
      console.log(err);
    });
  });
});

// this starts the server
server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
