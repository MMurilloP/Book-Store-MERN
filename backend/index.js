import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
export const mongoDBURL = process.env.mongoDBURL;

//Middleware for parsin request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/books", booksRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
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
