/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md text-3xl bg-purple-500">
            Nº
          </th>
          <th className="border border-slate-600 rounded-md text-3xl  bg-purple-500">
            Title
          </th>
          <th className="border border-slate-600 rounded-md text-3xl   bg-purple-500 max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden  bg-purple-500 text-3xl">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md text-2xl  bg-purple-500">
            Details / Edit / Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-800 text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-600 text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
