import React from "react";

export default function Login() {
  return (
    <div className="flex relative flex-col rounded-md shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form className="flex flex-col p-4 space-y-4">
          <label className="flex flex-col">
            <span>Email</span>
            <input
              type="email"
              className="border border-gray-200 p-2 rounded-md"
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              className="border border-gray-200 p-2 rounded-md"
            />
          </label>
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
