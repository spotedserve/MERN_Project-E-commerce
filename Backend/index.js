const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/config");
const Users = require("./DB/users");
// const connectDB = async () => {
//   mongoose.connect("mongodb://localhost:27017/Nodejs");
//   const notificationsSchema = new mongoose.Schema({});
//   const notifications = mongoose.model("notifications", notificationsSchema);
//   const data = await notifications.find();
//   console.log(data);
// };

app.use(express.json());
app.use(cors());
// app.get("/", (req, resp) => {
//   resp.send("Running...");
// });

app.post("/register", async (req, resp) => {
  let newUser = new Users(req?.body);
  let result = await newUser.save();
  resp.send(result);
});

app.listen(5000);
