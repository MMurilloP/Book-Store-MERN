import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-mern-cxst.onrender.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleString(undefined, options);
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-5xl my-4 text-blue-600">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex m-10">
          <div className="flex flex-col border-2 border-blue-300 rounded-xl w-max p-4">
            <div className="my-4 flex items-center">
              <span className="text-3xl mr-4 text-gray-500">Title:</span>
              <span className="text-blue-800">{book.title}</span>
            </div>
            <div className="my-4 flex items-center">
              <span className="text-3xl mr-4 text-gray-500">Author:</span>
              <span className="text-blue-800">{book.author}</span>
            </div>
            <div className="my-4 flex items-center">
              <span className="text-3xl mr-4 text-gray-500">Publish Year:</span>
              <span className="text-blue-800">{book.publishYear}</span>
            </div>
            <div className="my-4 flex items-center">
              <span className="text-xl mr-4 text-gray-500">Create Time:</span>
              <span className="text-blue-800">
                {formatDate(book.createdAt)}
              </span>
            </div>
            <div className="my-4 flex items-center">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time:
              </span>
              <span className="text-blue-800">
                {formatDate(book.updatedAt)}
              </span>
            </div>
          </div>
          <div className="m-10">
            <img src={book.imageUrl} alt="book image" className="w-60" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
