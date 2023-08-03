import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full mb-20 text-center">
      <div className="background bg-cover bg-center m-3 inline-flex">
        <Link
          to="/"
          className="z-10 mix-blend-lighten text-black bg-white text-7xl name-logo"
        >
          NICOLAS ARAUJO
        </Link>
      </div>
      <div className="">
        <Link
          to="/projects"
          className="inline-block underline mx-5 font-semibold"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="inline-block underline mx-5 font-semibold"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="inline-block underline mx-5 font-semibold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
