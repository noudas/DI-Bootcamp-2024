const express = require("express");
const { getInfo } = require("./config/usersInfo.js");

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await getInfo();
    res.json(users);
  } catch (error) {
    console.log(err);
    res.status(404).json({ msg: "users not found" });
  }
  //   getInfo()
  //     .then((users) => {
  //       res.json(users);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(404).json({ msg: "users not found" });
  //     });
});

app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await getInfo();
    const user = users.find((item) => item.id == id);
    res.json(user);
  } catch (error) {
    console.log(err);
    res.status(404).json({ msg: "users not found" });
  }
});
