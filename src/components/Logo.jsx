import React from 'react';
import LogoImage from "../assets/logo.png"; 
import "../App.css";

const Logo = () => {
  return (
    <div className="w-full flex items-center justify-center pl-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center py-2 gap-3">
          <img src={LogoImage} alt="logoimage" className='w-12' />
          <h1 className="text-3xl font-bold">Movies<span className='text-[#e50914]'>.</span></h1>
        </div>
      </nav>
    </div>
  );
}

export default Logo;
