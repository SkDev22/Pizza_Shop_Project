import { Link } from "react-router-dom";
import { icons } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Manage Items", link: "/items" },
    { name: "Invoices", link: "/invoices" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center top-0 w-full py-5 px-5 md:px-40">
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <icons.GiFullPizza className="text-4xl text-red-600" />
            <h1 className="font-Pacifico text-lg md:text-2xl">Magna Pizza</h1>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-3xl md:hidden"
          key={Links.name}
        >
          {open ? <icons.RxCrossCircled /> : <icons.GiHamburgerMenu />}
        </div>

        <ul
          className={`md:bg-transparent text-black md:gap-7 md:flex py-7 md:py-0 absolute md:static md:items-center md:z-auto z-[1] text-center right-5 rounded-3xl w-[89%] md:w-auto md:mt-0 md:pr-0 pr-5 ${
            open ? "top-[80px] bg-pink-600" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            // eslint-disable-next-line react/jsx-key
            <li className="cursor-pointer hover:underline mb-5 md:mb-0 uppercase">
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
