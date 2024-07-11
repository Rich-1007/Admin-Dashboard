import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const LogInPage = () => {
  const notify = () => toast("Loged In");
  const notifyError = () => toast("Please Enter Your Email and Password");

  const [idPass, setIdPass] = useState({ email: "", password: "" });

  function SubmitHandle(e) {
    e.preventDefault();

    if (idPass.email != "" && idPass.password != "") {
      notify();
    } else {
      notifyError()
    }
    setIdPass({ email: "", password: "" });
  }
  return (
    <div className=" flex flex-col gap-5 items-center justify-center h-screen bg-gray-100">
      <div className="sm:w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={(e) => SubmitHandle(e)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={idPass.email}
              onChange={(e) =>
                setIdPass((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              value={idPass.password}
              onChange={(e) =>
                setIdPass((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            Login
          </button>

          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
