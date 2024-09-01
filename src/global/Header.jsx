import React from "react";

const Header = () => {
  return (
    <header className="container fixed">
      <nav className="w-full h-20 bg-gradient-to-b from-white p-5 flex flex-cols justify-between items-center px-20">
        <ul className="flex gap-4 text-lg">
          <li><img src="/images/logo.svg" alt="logo" className="w-28" /></li>
          <li>Narxlar</li>
          <li>Biz haqida</li>
        </ul>
        <ul className="flex gap-5">
          <li><a href="#">Ro'yxatdan o'tish</a></li>
          <li><a href="#">Hisobga kirish</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
