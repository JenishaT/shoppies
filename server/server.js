const app = require("./app");
const express = require("express");
const path = require("path");

//Server serves react app in production build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(process.env.PORT, () =>
  console.log(`Server Online on Port ${process.env.PORT}`)
);