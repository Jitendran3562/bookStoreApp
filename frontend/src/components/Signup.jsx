import React from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location  = useLocation();
  const navigate = useNavigate();
  const from  = location.state?.from.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4004/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup sucessfully!");
          navigate(from , {replace:true});
         
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error" + err.response.data.message);
        }
      });
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

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name field */}
              <div className="mt-4 space-y-2">
                <label>Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border-rounded-md outline-none"
                  {...register("fullname", {
                    required: "fullName is required",
                  })}
                />
                {errors.fullname && (
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
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border-rounded-md outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    type="button"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login modal */}
      <dialog id="my_modal_3" className="modal">
        <Login />
      </dialog>
    </>
  );
}

export default Signup;
