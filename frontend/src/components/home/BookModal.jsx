/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[750px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit m-4 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <div className="flex justify-start items-center gap-x-2 m-4">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 m-4 ">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="m-4">Description:</p>
        <p className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum
          temporibus debitis explicabo quam quos laudantium odit in doloremque
          asperiores hic laboriosam aspernatur quis, voluptates saepe! Quas
          neque ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum illum soluta laudantium quaerat iste consectetur, perferendis
          atque deleniti ad cum, obcaecati eos adipisci ex quidem ipsam, quo
          corporis aliquid accusantium?
        </p>
        <div className="flex justify-center">
          <img src={book.imageUrl} alt="image" className="m-6 w-40 h-50" />
        </div>
      </div>
    </div>
  );
};

export default BookModal;
