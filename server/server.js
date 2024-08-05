const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

let items = [
  {
    id: 1,
    title: "Gray sneakers with white stripes",
    description: `White sneakers are made of natural, biodegradable material. This feature
      alione makes them extremely nature friendly.`,
    brand: "ALIDAS",
    price: 240,
  },
  {
    id: 2,
    title: "Gray sneakers with white stripes",
    description: `White sneakers are made of natural, biodegradable material. This feature
      alione makes them extremely nature friendly.`,
    brand: "ALIDAS",
    price: 398,
  },
  {
    id: 3,
    title: "Gray sneakers with white stripes",
    description: `White sneakers are made of natural, biodegradable material. This feature
      alione makes them extremely nature friendly.`,
    brand: "ALIDAS",
    price: 765.55,
  },
];

app.get("/api/items", (_, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  let lastId = items[items.length - 1].id;
  const newItem = {
    ...req.body,
    id: ++lastId,
  };

  items.unshift(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
