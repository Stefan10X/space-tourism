import logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-full items-end h-32">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="ml-12 mb-6" />
      </NavLink>
      <div className="pr-20 pl-48 bg-white bg-opacity-5 backdrop-blur-xl">
        <ul className="flex items-center gap-14 h-24 text-gray-50 text-md font-light uppercase">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full border-b-2"
                : "flex items-center h-full hover:border-b-2 hover:border-white"
            }
          >
            <div className="text-white font-semibold mr-2">00</div>
            <div>Home</div>
          </NavLink>

          <NavLink
            to={"destination"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full border-b-2"
                : "flex items-center h-full hover:border-b-2 hover:border-white"
            }
          >
            <div className="text-white font-semibold mr-2">01</div>
            <div>Destination</div>
          </NavLink>

          <NavLink
            to={"crew"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full border-b-2"
                : "flex items-center h-full hover:border-b-2 hover:border-white"
            }
          >
            <div className="text-white font-semibold mr-2">02</div>
            <div>Crew</div>
          </NavLink>

          <NavLink
            to={"technology"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full border-b-2"
                : "flex items-center h-full hover:border-b-2 hover:border-white"
            }
          >
            <div className="text-white font-semibold mr-2">03</div>
            <div>Technology</div>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
