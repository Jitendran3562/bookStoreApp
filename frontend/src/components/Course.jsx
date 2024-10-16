import React, { useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState, } from "react";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4004/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px:4 ">
        <div className="mt-28 item-center justify-content-center text-center">
          <h1 className=" text-2xl  md:text-4xl">
            we're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
            minus atque libero nobis amet suscipit autem eius facere minima ab
            laudantium placeat error recusandae dolorum, ratione saepe numquam
            labore eaque veniam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Optio officiis quo repellat dolores distinctio
            quis, earum necessitatibus sapiente, recusandae dicta eos nostrum
            voluptatem architecto quidem iste, sunt est molestiae commodi eaque
            veniam.
          </p>
          <Link to={"/"}>
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
