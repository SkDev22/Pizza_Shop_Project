import { assets, icons } from "../assets/assets";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div>
        <div className="flex flex-col">
          <h1 className="text-center font-Satisfy text-5xl mt-5">
            Enjoy fresh items of our
            <br />
            Magna Pizza
          </h1>
          <button className="mt-7 bg-Black-rich px-7 py-3 mx-auto text-white-high font-Outfit">
            See Menu
          </button>
          <p className="text-center text-sm opacity-90 mt-2 font-Outfit">
            *10% off on first order
          </p>
        </div>
        <div className="flex justify-center gap-20 mt-3">
          <img
            src={assets.pizza2}
            alt="Cafe Image"
            className="w-60 h-72 rounded-xl hidden md:flex"
          />
          <img
            src={assets.pizza3}
            alt="Cafe Image"
            className="w-60 h-80 mt-8 rounded-xl "
          />
          <img
            src={assets.pizza1}
            alt="Cafe Image"
            className="w-60 h-72 rounded-xl hidden md:flex"
          />
        </div>
        <div className="-mt-72 mr-6 hidden md:grid justify-end">
          <hr className=" w-40 rotate-90 bg-black " />
        </div>
        <div className=" hidden md:grid mt-24 mr-24 justify-end gap-2 items-center opacity-80">
          <a href="www.facebook.com">
            <icons.FaFacebookF />
          </a>

          <a href="www.youtube.com">
            <icons.FaYoutube />
          </a>

          <a href="www.instagram.com">
            <icons.FaSquareInstagram />
          </a>
        </div>
        <icons.GiOakLeaf className=" rotate-90 text-[100px] md:text-[200px] -mt-96 md:-mt-20 -ml-5 text-pink-600 opacity-10" />
      </div>

      {/* What we offer */}
      <div className=" mt-96 md:mt-28 px-2 md:px-0">
        <div className="text-center font-Outfit">
          <h1 className="  text-3xl font-semibold">
            What We Offer
            <br />
          </h1>
          <hr className="w-20 bg-pink-600 opacity-20 h-1 mx-auto mb-5" />
          <p className="">
            Introdusing you a wide range of pizza items with
            <br />
            unique taste and the world class pizzas in the town.
          </p>
          <div className="-mt-20 md:flex flex-col gap-10 hidden">
            <div className="flex justify-between px-96">
              <icons.GiFullPizza className="text-4xl rotate-12 text-pink-600 opacity-10 animate-bounce" />
              <icons.FaPizzaSlice className="text-4xl text-pink-600 opacity-10 animate-bounce" />
            </div>
            <div className="flex justify-between px-60">
              <icons.RiDrinks2Fill className="text-4xl text-pink-600 opacity-10 animate-bounce" />
              <icons.GiSausage className="text-4xl text-pink-600 opacity-10 animate-bounce " />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-10 font-Outfit font-medium mt-7">
          <div className="flex flex-col justify-between items-center">
            <img
              src={assets.pepperoni}
              alt=""
              className="w-40 h-52 rounded-full"
            />
            <h1 className="mt-4">Pepperoni Pizza</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src={assets.bbq} alt="" className="w-40 h-52 rounded-full" />
            <h1 className="mt-4">BBQ Chicken Pizza</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              src={assets.Hawaiian}
              alt=""
              className="w-40 h-52 rounded-full"
            />
            <h1 className="mt-4">Hawaiian Pizza</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              src={assets.magarita}
              alt=""
              className="w-40 h-52 rounded-full"
            />
            <h1 className="mt-4">Margherita Pizza</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              src={assets.meatLove}
              alt=""
              className="w-40 h-52 rounded-full"
            />
            <h1 className="mt-4">Meat Lover&apos;s Pizza</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              src={assets.veggie}
              alt=""
              className="w-40 h-52 rounded-full"
            />
            <h1 className="mt-4">Veggie Delight Pizza</h1>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 md:mt-0 px-10 md:px-24">
          <icons.FaPizzaSlice className=" text-5xl md:text-4xl text-pink-600 opacity-10 animate-bounce" />
          <icons.GiFullPizza className=" text-5xl md:text-4xl text-pink-600 opacity-10 animate-bounce" />
        </div>
      </div>

      {/* About */}
      <div className="flex md:flex-row flex-col justify-between mt-14 md:mt-20 mb-10 bg-white-medium h-auto">
        <div className="flex-1">
          <img src={assets.shop} alt="" className="h-full" />
        </div>
        <div className="flex-1 p-10 font-Outfit">
          <div className="h-full p-2 md:p-20 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl font-semibold">About The Magna Pizza</h1>
            <hr className="w-20 bg-pink-600 opacity-20 mx-auto md:mx-0 mt-3 md:mt-0 h-1" />
            <p className="my-10">
              The Magna Pizza serves delicious, handcrafted pizzas made with the
              freshest ingredients, offering a cozy and welcoming atmosphere.
              Perfect for family gatherings, casual meetups, or a quick bite, it
              features a diverse menu of classic and specialty pizzas,
              comfortable seating, and exceptional service to make your visit
              unforgettable.
            </p>
            <Link to="/about">
              <button className="bg-black w-[120px] py-2 text-white-high">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
