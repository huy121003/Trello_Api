import express from "express";

const app = express();

const hostName = process.env.HOST || "localhost";
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
