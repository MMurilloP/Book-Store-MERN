// import express from "express";
// import { Book } from "../models/bookModel.js";
const express = require("express");

const { Book } = require("../models/bookModel.js");

const router = express.Router();

// create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      imageUrl: req.body.imageUrl,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//get one book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//update one book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const book = await Book.findByIdAndUpdate(req.params.id, req.body);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//delete one book by id

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// export default router;
module.exports = router;
