require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/user", function (req, res) {
  res.json("Hola a todos");
});
app.post("/user", function (req, res) {
  let body = req.body;
  res.json({ body });
});

app.put("/user/:id", function (req, res) {
  let id = req.params.id;
  res.json({
    id,
    text: `hola usuario ${id}`,
  });
});

app.delete("/user", function (req, res) {
  res.json("Hola a todos");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto: ", process.env.PORT);
});
