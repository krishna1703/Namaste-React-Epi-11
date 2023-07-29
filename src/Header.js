import React from "react";
import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link,to } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Networkconnection from "../utils/Networkconnection";
import { useSelector } from "react-redux"




const Header = () => {

  const [login, Setlogin] = useState("Login")

  const OnlineStatus = useOnlineStatus(true)

 const cartItem = useSelector( store => store .cart.items);
//  console.log(cartItem)

  return (
    <div className="flex justify-between flex-wrap  bg-white text-black text-xl  gap-5 

    shadow-lg  mb-4 text-center   p-2 items-center">
      <div >
      <Link to="/"> <img className="h-16 mx-28  cursor-pointer" src={LOGO_LINK} /></Link>
     
      </div>

      <div >
        <ul className="flex flex-wrap text-center justify-between gap-5 items-center px-36">

          <li className="px-4 hover:text-red-400   ">
            {OnlineStatus ? true : <Networkconnection />}
          </li> 

          <li  className="px-4   hover:text-red-400  ">
            <Link to="/"> Home</Link>
          </li>

          <li  className="px-4   hover:text-red-400 " >
            <Link to="/about">About</Link>
          </li>

          <li   className="px-4  hover:text-red-400" > 
            <Link to="/contact">contact</Link>
          </li>

          <li  className="px-4  hover:text-red-400 " >
            <Link to="/InstaMart">InstaMart</Link>
          </li>

          <li  className="px-4  hover:text-red-400 " > 
            <Link to="/cart">cart: {cartItem.length}🛒</Link>
          </li>


          <button className="px-4  p-2  bg-green-500  rounded-md text-white " onClick={() => {
            login == "Login" ? Setlogin("Logout") : Setlogin("Login")

          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
