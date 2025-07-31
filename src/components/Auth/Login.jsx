import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-emerald-600 p-12">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("Email is", email)
            console.log("Password is", password)

            setEmail("");
            setPassword("");
          }}
          className="flex flex-col  items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full"
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full mt-4"
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
          <button className="w-full text-white outline-none bg-emerald-600 border-none py-3 px-5 rounded-full mt-5 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
