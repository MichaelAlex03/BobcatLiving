import { useState } from "react";
import Navbar from "../components/Navbar";

export const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
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

  //Create handleSubmit function for login which will send post request to store users in database

  /*inset-0 makes it so that the top right bottom and left distance from the parent is 0.
  Basically covering entire area*/
  return (
    <>
      <div className="z-50">
      <Navbar />
      </div>
      <div className="relative w-full h-full">
        <div className="bg-[url('/images/background.jpg')] absolute inset-0 blur-sm bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="flex justify-center items-center h-[90vh] relative">
            <form className="form sm:h-[100vh]">
              <div className="flex flex-col w-full">
                <h1 className="text-3xl font-bold text-center mb-5">
                  Welcome
                </h1>

                <label htmlFor="userName" className="mb-1 text-xs">
                  Username
                </label>
                <input
                  className="border-b-2 border-black mb-4 p-2"
                  type="text"
                  placeholder="Username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />

                <label htmlFor="password" className="mb-1 text-xs">
                  Password
                </label>
                <input
                  className="border-b-2 border-black p-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit mt-10 mb-1">
                Log In
              </button>
              <p className="text-color text-sm">Don't have an account? <span className="text-blue-500"><a href="/signUp">Sign Up</a></span></p>
            </form>
          </div>
      </div>
    </>
  );
};

export default Login;
