import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import user from "../assets/Ellipse 4.png"
export default function Nav({name, setName, setSign}) {
    const {pathname} = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    
    return (
      <nav className="px-3 sm:px-5 py-4 lg:px-20 flex items-center justify-between relative">
        <input
          type="checkbox"
          className="toggle-menu peer hidden"
          id="toggle-menu"
        />

        <Link to="/" className="md:mr-10 lg:mr-20" aria-label="logo">
          <div className="flex flex-col relative items-center leading-none">
            <div className="flex">
              <div className="w-[50px] h-[3px] bg-[#63BC54] -rotate-[30deg] translate-x-[7.5px]"></div>
              <div className="w-[50px] h-[3px] bg-[#63BC54] rotate-[30deg] -translate-x-[7.5px]"></div>
            </div>
            <p className="text-[#63BC54] text-[60px]">HH</p>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start w-full md:relative absolute top-[-300%] peer-checked:top-[100%] duration-500 z-[1000] bg-white right-0 p-5 md:p-0">
          <div className="flex gap-4 text-[1.3rem] md:items-center *:w-fit justify-around max-w-[480px] md:flex-row flex-col mb-4 md:mb-0 items-start *:px-2">
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
          {name ? (
            <div className="flex gap-3 text-[1.3rem] relative group text-center max-w-[290px] md:items-center items-start md:justify-end w-full">
              <div className="flex gap-3 items-center">
                <p className="text-[22px]">{name}</p>
                <img src={user} alt="logged in user" className="w-[60px]" />
              </div>
              <p
                className="px-4 absolute top-16 bg-white invisible group-hover:visible duration-200 py-2 ring-slate-700 rounded-md ring-1 cursor-pointer w-[130px] font-semibold"
                to="/sign-up"
                onClick={() => setName("")}
              >
                Log Out
              </p>
            </div>
          ) : (
            <div className="flex gap-3 text-[1.3rem] text-center max-w-[290px] items-start md:justify-end w-full">
              <p
                className=" px-4 py-2 ring-slate-700 rounded-md ring-1 cursor-pointer w-[130px] font-semibold"
                onClick={() => setSign(true)}
              >
                Login
              </p>
              <p
                className="px-4 py-2 ring-slate-700 rounded-md ring-1 cursor-pointer w-[130px] font-semibold"
                onClick={() => setSign(true)}
              >
                Sign Up
              </p>
            </div>
          )}
        </div>
        <label
          className="flex flex-col *:h-1 *:w-[40px] gap-3 md:hidden *:bg-black"
          htmlFor="toggle-menu"
        >
          <div></div>
          <div></div>
          <div></div>
        </label>
      </nav>
    );
}