var express = require("express");
var socket = require("socket.io");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
let commandObj = null;

const corsConfig = {
  credentials: true,
  origin: true,
};

const PORT = process.env.PORT || 80;

io.on("connection", (socket) => {
  console.log("User connection estabilished");
  socket.on("command", (command) => {
    console.log(" Command Received");
    commandProcessor(command.type);
    console.log(commandObj);
    socket.emit("command", commandObj);
  });

  socket.on("message", (command) => {
    console.log(" Mesage Received");
    if (command.author === "admin") {
      commandProcessor(command.type);
      console.log(commandObj);
      socket.emit("message", commandObj);
    } else {
      commandObj = {
        author: "ottonova bot",
        message: "User not found",
        authorised: false,
      };
      socket.emit("message", commandObj);
    }
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

// Start up the Node server
server.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

function commandProcessor(type) {
  console.log("commandProcessor");
  switch (type) {
    case "message":
      commandObj = {
        author: "ottonova bot",
        message: "Hey Client, you said 'Hello!', right?",
        authorised: true,
      };
      break;
    case "map":
      commandObj = {
        command: {
          type: "map",
          data: {
            lat: 48.1482933,
            lng: 11.586628,
          },
        },
      };
      break;
    case "rate":
      commandObj = {
        command: {
          type: "rate",
          data: [1, 2],
        },
      };
      break;
    case "date":
      commandObj = {
        command: {
          type: "date",
          data: new Date().toISOString(),
        },
      };
      break;
    case "complete":
      commandObj = {
        command: {
          type: "complete",
          data: ["Yes", "No"],
        },
      };
      break;
    default:
      commandObj = {
        author: "invalid",
        message: "Please enter the Valid Command",
      };
      break;
  }
}
