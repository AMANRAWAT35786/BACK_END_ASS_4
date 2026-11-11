const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const emitter = require("./events/emitter");

function initSocket(server) {
  const io = new Server(server);

  // JWT authentication at handshake
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token provided"));
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return next(new Error("Invalid token"));
      socket.user = user;
      next();
    } catch {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.join("general");
    console.log(socket.id, "joined room general");

    socket.on("chatMessage", (message) => {
      const username = socket.user.username;
      console.log("[general]", username + ":", message);
      emitter.emit("messageSent", { username, message });
      io.to("general").emit("chatMessage", { username, message });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
}

module.exports = initSocket;
