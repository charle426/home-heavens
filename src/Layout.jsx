import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LoginSignUp from "./Components/LoginSignUp";
import { useEffect, useState } from "react";

export default function Layout({ name, setName }) {
    const [sign, setSign] = useState(false)
    useEffect(() => {
        if (setName)
    {
        setSign(false)
    } 
    }, [name])
   
  return (
    <>
      <LoginSignUp setName={setName} sign={sign} setSign={setSign} />
      <Navbar name={name} setName={setName} setSign={setSign} />
      <Outlet />
      <Footer />
    </>
  );
}