import React, { useState } from "react";
import Navbar from "../components/Navbar";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-full">
        <div className="bg-[url('/images/background.jpg')] absolute inset-0 blur-sm w-full h-full bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="flex justify-center items-center h-[90vh] relative" >
            <form className="form h-[60vh]">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-center mb-5">
                  Create your account
                </h1>

                <label htmlFor="userName">Username</label>
                <input
                  className="border border-black rounded-md mb-2"
                  type="text"
                  placeholder="username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                  className="border border-black rounded-md mb-2"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <label htmlFor="confirmPass">Confirm Password</label>
                <input
                  className="border border-black rounded-md p-2"
                  type="password"
                  placeholder="password"
                  name="confirmPass"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit">
                Sign Up
              </button>
            </form>
          </div>
      </div>
    
    </>
  );
};

export default SignUp;
