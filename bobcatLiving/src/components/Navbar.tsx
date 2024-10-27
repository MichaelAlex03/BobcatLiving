import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-center text-white py-6 px-8 md:px-32 bg-background drop-shadow-md">
        <ul className="hidden xl:flex lg:flex items-center gap-12 font-semibold text-base">
          <li>
            <a href="/" className="nav">
              Home
            </a>
          </li>
          <li>
            <Link to={"/apartments"} className="nav">
              View Apartments
            </Link>
          </li>
          <li>
            <a href="/" className="nav ">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden xl:flex lg:flex ml-auto gap-8 font-semibold">
          <Link to={"/login"}>
            <button className="py-2 px-8 hover:bg-background hover:text-white hover:border-bg-background border-2 bg-bar text-white rounded-md transition-all cursor-pointer hover:bg-blue-70">
              Log In
            </button>
          </Link>
          <Link to={"/signUp"}>
            <button className="py-2 px-8 text-white hover:bg-bar hover:text-white border-bg-bar border-2 rounded-md transition-all cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center w-full">
          <span className="text-xl font-bold block mr-auto">BobcatLiving</span>
          <i
            className="bx bx-menu text-5xl cursor-pointer flex justify-start "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </div>
      </header>

      <div
        className={`absolute xl:hidden lg:hidden m:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold transform transition-transform' 
      ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer">
          Home
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer">
          View Apartments
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer">
          Contact
        </li>
      </div>
    </div>
  );
};

export default Navbar;
