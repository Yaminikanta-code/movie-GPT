import React from "react";

function Header() {
  return (
    <div className="w-full bg-transparent m-4">
      <header className="flex justify-between items-center p-0">
        <h1 className="text-white text-3xl font-bold">MovieGPT</h1>
        <nav className="flex items-center gap-4">
          <button className="bg-[#e50914] text-white py-1 px-3 rounded-md shadow-xl active:bg-red-400">
            Sign Up
          </button>
        </nav>
      </header>
    </div>
  );
}
export default Header;
