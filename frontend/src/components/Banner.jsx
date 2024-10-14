import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px:4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full md:w-1/2  ">
          <div className="space-y-12 mt-12 md:mt-32">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new every day!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut distinctio repudiandae culpa ratione ab facere quaerat non fugit placeat nostrum harum quas magnam esse minus praesentium assumenda doloremque, consequatur dicta quia?
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Get Start</button>
        </div>
        <div className=" order-1 w-full md:w-1/2 mt-9" >
          <img src="/Banner.png" alt="Banner"  className=" ml-10 w-85 h-82"/>  
        </div>
      </div>
    </>
  );
}

export default Banner;
