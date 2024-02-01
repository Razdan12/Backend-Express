const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userController = require('./user/userControler');
const TaskController = require('./task/taskController')

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));

dotenv.config();
const port = process.env.PORT || 9090; // default to 443 if PORT not set

app.use(express.json({ limit: "1gb" }));
app.use(express.urlencoded({ limit: "1gb", extended: true }));


app.use('/user', userController);
app.use('/task', TaskController);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server Runing on port ${port}`);
});
