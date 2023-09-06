// SEED FILE CONNECT TO MONGODB ON ITS OWN
// cd backend + in cli run: node node seed/seed.js

// *RUN  node seed/seed.js from the same level as the server or .env variables ===undefined

import mongoose from "mongoose";

// Schema must match the seed

import { Book } from "../models/bookModel.js";

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON

import dotenv from "dotenv";
dotenv.config();

const db = process.env.mongoDBURL;

// STAND ALONE CONNECTION TO DB;
mongoose
  .connect(db)
  .then(() => console.log("mongodb SEED connection success"))
  .catch((error) => console.log(error));

// MOCK DATA
const seedBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
    imageUrl:
      "https://m.media-amazon.com/images/I/51MwI3tmX7L._SX325_BO1,204,203,200_.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
    imageUrl:
      "https://m.media-amazon.com/images/I/51g3u0pKK4L._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
    imageUrl: "https://m.media-amazon.com/images/I/81WunXo0giL._AC_UL400_.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
    imageUrl: "https://m.media-amazon.com/images/I/711PbMmqr9L._AC_UL400_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
    imageUrl:
      "https://m.media-amazon.com/images/I/51lprH3LF4L._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishYear: 1851,
    imageUrl:
      "https://m.media-amazon.com/images/I/41hqxweW2TL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
    imageUrl: "https://m.media-amazon.com/images/I/A1EgynjIE-L._AC_UL400_.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publishYear: 1997,
    imageUrl:
      "https://m.media-amazon.com/images/I/51YRRwUALDL._SX198_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
    imageUrl: "https://m.media-amazon.com/images/I/71k--OLmZKL._AC_UL400_.jpg",
  },
];

//   seeding function
const seedDB = async () => {
  // deletes any existing collections before seeding
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
  console.log("seedDB function ran");
};
//   call the function and it's promise to close this connection after seeding
seedDB().then(() => {
  console.log("seeds closed connection");
  mongoose.connection.close();
});
