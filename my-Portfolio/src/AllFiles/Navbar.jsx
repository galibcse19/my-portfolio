import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#education">EDUCATION</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-[#9E31F1] to-[#C82CD9] lg:px-12 md:px-8 px-2 text-white drop-shadow-md hover:drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-[#9E31F1] to-[#C82CD9] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2 className="font-bold lg:text-3xl hidden lg:flex md:flex md:text-2xl text-sm">ABDULLA AL GALIB</h2>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-md">{links}</ul>
      </div>
      <div className="navbar-end">
      <button className="px-4 py-2 lg:text-sm md:text-xs text-xs bg-white font-bold border-2 border-white rounded-full hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
            <a
                href="https://drive.google.com/file/d/1IjG779LqJrl6jwPWk0t1rBWTGmePK28z/view?usp=sharing"
                className="flex items-center"
                target="_blank"
                download
            >
                DOWNLOAD RESUME
                <span className="p-2 ml-2 rounded-full bg-purple-500 text-white">
                <FaDownload />
                </span>
            </a>
            </button>

      </div>
    </div>
  );
};

export default Navbar;
