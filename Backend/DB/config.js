const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MERN_Project");

// const connectDB = async () => {
//   mongoose.connect("mongodb://localhost:27017/MERN_Project");
//   const usersSchema = new mongoose.Schema({});
//   const users = mongoose.model("users", usersSchema);
//   const data = await users.find();
//   console.log(data);
// };

// connectDB();
