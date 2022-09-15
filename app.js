const express = require("express");
const dotenv = require("dotenv");
var os = require("os");
// dotenv.config();
const app = express();

var networkInterfaces = os.networkInterfaces();

app.use("/", async (req, res) => {
  console.log(`I am sending response!!!!!!!!!!!!! ${os.hostname()}`);
  // res.json({ message: "Ok it works...", hostname: os.hostname() });
  res.send(`
  <div>
  <h1>Hello!
  Your local IP address: ${networkInterfaces["eth0"][0].address} 
  <h1>
  
  </div>
    `);
});

app.listen(4000, () => console.log("Server on port 4000"));
// app.get("/", (req, res) => {
//   res.send(os.hostname());
// });

// app.listen(process.env.LISTEN_PORT, () => {
//   console.log("Server started on port " + process.env.LISTEN_PORT);
// });
