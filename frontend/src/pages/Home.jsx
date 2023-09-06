import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const buttonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const titleStyles = "text-7xl font-semibold my-8";
  const addIconStyles = "text-blue-800 text-4xl";

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className={`${buttonStyles} ${
            showType === "table" ? "bg-blue-700" : ""
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`${buttonStyles} ${
            showType === "card" ? "bg-blue-700" : ""
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className={titleStyles}>Books List</h1>
        <Link to="/books/create">
          <div className="flex flex-row gap-x-4">
            <MdOutlineAddBox className={addIconStyles} />
            <h3 className="text-2xl">Add a new Book</h3>
          </div>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
