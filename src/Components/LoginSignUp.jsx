import cancelImg from "../assets/Frame 87.png"
import google from "../assets/google.png"
import { useState } from "react";
export default function LoginSignUp({ setName, sign, setSign }) {
    const [login, setLogin] = useState(true);
    const [name, getName] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        setName(name)
    }
  return (
    <section
      className={
        sign
          ? "w-full flex justify-center items-center h-[100vh] fixed top-[0] z-[2000] p-3 duration-500 bg-[#426f4186]"
          : "w-full flex justify-center items-center h-[100vh] fixed top-[-200%] z-[2000] duration-500"
      }
    >
      <div className="shadow-md shadow-slate-700 bg-white max-w-[500px] p-6 rounded-3xl">
        <div className="flex justify-between items-start w-full">
          <div>
            <h1 className="text-[1.6rem] font-semibold">
              Join Home Heavens for free
            </h1>
            <p>Get your dream home easily</p>
          </div>
          <div onClick={() => setSign(false)}>
            <img src={cancelImg} alt="Go back" className="translate-x-5" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="ring-1 flex gap-3 items-center ring-slate-700 *:text-[21px] font-semibold justify-center rounded-lg py-2 px-4 w-full">
            <img src={google} alt="google logo" className="w-[50px]" />
            <p>Continue with Google</p>
          </div>
          <div className="w-full flex gap-3 items-center">
            <div className="w-full max-w-[200px] h-[1px] bg-slate-600"></div>
            <p>OR</p>
            <div className="w-full max-w-[200px] h-[1px] bg-slate-600"></div>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div>
              <input
                type="text"
                className="ring-1 ring-slate-700 rounded-lg w-full bg-transparent px-4 py-3"
                placeholder="Username"
                required
                name="name"
                onChange={(e) => getName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                className="ring-1 ring-slate-700 rounded-lg bg-transparent px-4 py-3 w-full"
                placeholder="Email"
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-blue-600 rounded-lg p-2 w-full text-center text-white text-[22px]"
              >
                {login ? "Create an account" : "Login"}
              </button>
            </div>
          </form>
        </div>
        <div className=" mt-3">
          {login ? (
            <p>
              Don't have an account{" "}
              <span className="underline" onClick={() => setLogin(!login)}>
                Sign Up
              </span>
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              <p>
                Already have an account{" "}
                <span className="underline" onClick={() => setLogin(!login)}>
                  Login
                </span>
              </p>
              <p>
                By joining Home Heavens you agree to our{" "}
                <span className="text-slate-500 underline">
                  terms and conditions
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}