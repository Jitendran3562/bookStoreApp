import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data submission
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email input */}
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border-rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password input */}
            <div className="mt-4 space-y-2">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border-rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
                
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Login button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
