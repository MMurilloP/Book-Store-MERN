// import express from "express";
// import mongoose from "mongoose";
// import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const booksRoute = require("./routes/booksRoute.js");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

app.use("/books", booksRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
//   });
// }

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
