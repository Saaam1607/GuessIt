import { io } from "socket.io-client";

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);

console.log("Connecting to socket at: " + socketUrl);

export default socket;