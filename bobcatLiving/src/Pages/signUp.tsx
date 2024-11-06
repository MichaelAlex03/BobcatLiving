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
            <form className="form h-[50vh]">
              <div className="flex flex-col w-full gap-4">
                <h1 className="text-2xl font-bold text-center mb-5">
                  Create your account
                </h1>

                <div className="flex flex-col gap-2">
                  <label htmlFor="userName" className="text-xs">Username</label>
                  <input
                    className="border-b-2 border-black mb-3"
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="mb-1 text-xs">Password</label>
                  <input
                    className="border-b-2 border-black mb-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPass" className="mb-1 text-xs">Confirm Password</label>
                  <input
                    className="border-b-2 border-black"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPass"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
  
              </div>
              <button type="submit" className="submit mt-10 mb-1">
                Sign Up
              </button>
              <p className="text-color text-sm">Already have an account? <span className="text-blue-500"><a href="/signUp">Log In</a></span></p>
            </form>
          </div>
      </div>
    
    </>
  );
};

export default SignUp;
