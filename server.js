const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!>>>>>>");
});

// GET product api
app.get("/api/products", (req, res) => {
  // fake electronic products
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "This is laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      description: "This is mobile",
      price: 500,
    },
  ];

  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
