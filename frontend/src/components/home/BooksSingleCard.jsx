/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-2 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>

      <img src={book.imageUrl} alt="book image" className="w-20 h-30 mb-4" />

      <div className="flex justify-be items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link
          to={`https://book-mern-cxst.onrender.com/books/details/${book._id}`}
        >
          <BsInfoCircle className="text-green-800 text-2x hover:text-black" />
        </Link>
        <Link to={`https://book-mern-cxst.onrender.com/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-600 text-2x hover:text-black" />
        </Link>
        <Link
          to={`https://book-mern-cxst.onrender.com/books/delete/${book._id}`}
        >
          <MdOutlineDelete className="text-red-600 text-2x hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BooksSingleCard;
