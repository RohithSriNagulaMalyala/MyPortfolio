import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineMenu } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="menubar">
        { <div className="logo"> <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="logo"
          /></div> }
        <div className="menu-icon" onClick={handleToggle}>
          <AiOutlineMenu size={30} />
        </div>
        <Menus toggle={toggle} />
      </div>
      <div className="container">
        <Home />
      </div>
    </>
  );
};

export default Layout;
