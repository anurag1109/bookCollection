// bookController.js
const Book = require("../Model/Book");

// Add Book API
const createBook = async (req, res) => {
  try {
    const { title, author, genre, description, price } = req.body;
    const book = new Book({
      title,
      author,
      genre,
      description,
      price,
    });

    await book.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    console.log(1);
    res.status(500).json({ error: "Failed to add book" });
  }
};

// Retrieve Books API
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

// Delete Book API
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

// Filter Books API
const filterBooks = async (req, res) => {
  try {
    const { genre, price } = req.query;
    const books = await Book.find({ genre }).sort({ price });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to filter books" });
  }
};

// Sort Books API
const sortBooks = async (req, res) => {
  try {
    const { sort } = req.query;
    let sortOrder = sort === "asc" ? 1 : -1;

    const books = await Book.find().sort({ price: sortOrder });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to sort books" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  deleteBook,
  filterBooks,
  sortBooks,
};
