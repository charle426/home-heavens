import facebook from "../assets/Facebook (1).png"
import Gmail from "../assets/Gmail.png"
import instagram from "../assets/Instagram.png"
import twitter from "../assets/X (1).png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <section className="bg-[#63BC54] px-3 sm:px-5 py-7 lg:px-20 min-h-[50vh]">
        <footer className="flex items-start justify-between flex-col md:flex-row *:text-white">
          <Link to="/" className="">
            <div className="flex flex-col relative items-center leading-none">
              <div className="flex">
                <div className="w-[50px] h-[3px] bg-[#fff] -rotate-[30deg] translate-x-[7.5px]"></div>
                <div className="w-[50px] h-[3px] bg-[#fff] rotate-[30deg] -translate-x-[7.5px]"></div>
              </div>
              <p className="text-[#fff] text-[60px]">HH</p>
            </div>
          </Link>
          <div className="">
            <h3 className="text-[1.6rem] mb-5">Company</h3>
            <div className="flex flex-col gap-3 text-[1.2rem] *:w-fit px-3 max-w-[500px] w-full">
              <Link className="w-full" to="/">
                Home
              </Link>
              <Link className="w-full" to="/heavenslist">
                Listing
              </Link>
              <Link className="w-full" to="/">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-[1.6rem] mb-5">Services</h3>
            <div className="flex flex-col gap-3 text-[1.2rem] *:w-fit px-3 max-w-[500px] w-full">
              <Link className="w-full" to="/" wishlist>
                WishList
              </Link>
              <Link className="w-full" to="/account">
                My Account
              </Link>
              <Link className="w-full" to="/">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div className=" w-full max-w-[450px]">
            <h3 className="text-[1.6rem] mb-5">Subscribe to our Newsletter</h3>
            <form>
              <div className="flex flex-col md:flex-row gap-3 items-center w-full">
                <label className="text-[.9rem] w-full max-w-[100px]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="ring-white bg-transparent w-full ring-1 placeholder:text-white rounded-md p-3"
                  placeholder="Email address"
                />
              </div>
              <div className="flex w-full justify-end">
                <button className="mt-3 bg-blue-600 rounded-md py-2 px-4">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </footer>
        <div className="bg-white w-full h-[2px] mt-10"></div>
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-6 justify-between w-full max-w-[600px]">
              <img src={instagram} alt="our instagram" />
              <img src={twitter} alt="our Twitter" />
              <img src={facebook} alt="our facebook" />
              <img src={Gmail} alt="our gmail" />
          </div>
        </div>
      </section>
    );
}