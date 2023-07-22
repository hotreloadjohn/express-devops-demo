const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!>>>>>>");
});

// GET product api
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
    { id: 5, name: "product 5" },
  ];
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
