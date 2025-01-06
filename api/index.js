const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;




// Enable CORS for all routes
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rajesh97266:MMNx1PfhL8ZxJJqZ@cluster0.fomno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({ username, password: hashedPassword });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(4000);

