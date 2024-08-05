const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

let products = [
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

app.get("/api/products", (_, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  let lastId = products[products.length - 1].id;
  const newItem = {
    ...req.body,
    id: ++lastId,
  };

  products.unshift(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
