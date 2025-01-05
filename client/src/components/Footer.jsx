import { icons } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  bg-Black-rich  text-white-high px-10 md:px-20 ">
        <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-0 items-center py-3">
          <div className="flex-1">
            <h1>Copyright &#64; {new Date().getFullYear()} Magna Pizza</h1>
          </div>
          <div className="flex-1 flex justify-center gap-5">
            <icons.FaFacebookF className="text-Blue-blue" />
            <icons.FaYoutube className="text-Red-red" />
            <icons.FaSquareInstagram />
          </div>
          <div className="flex-1 flex justify-end">
            <h1>Developed By Sahan</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
