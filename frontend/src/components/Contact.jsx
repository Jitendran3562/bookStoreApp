import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data submission
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact US</h3>

              {/* Name field */}
              <div className="mt-4 space-y-2">
                <label>Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border-rounded-md outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              {/* Email field */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border-rounded-md outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              {/* Password field */}
              <div className="mt-4 space-y-2">
                <label>Message</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="w-80 px-3 py-1 border-rounded-md outline-none"
                  {...register("message", { required: " message is required" })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className=" justify-around mt-4 ml-2">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
