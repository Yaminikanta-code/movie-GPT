import React from "react";
import { authService } from "../../utils";
import { UseAuthState } from "../../hooks";

function Header() {
  async function handleSignOut() {
    await authService.signOutUser();
  }

  const user = UseAuthState();

  return (
    <div className="w-full bg-transparent m-4">
      <header className="flex justify-between items-center p-0">
        <h1 className="text-white text-3xl font-bold">MovieGPT</h1>
        {user && (
          <nav className="flex items-start gap-4">
            <div className="flex-col items-center justify-center hidden sm:flex">
              <img
                src={user?.photoURL}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <p className="text-white w-14 text-center">
                {user?.displayName?.split(" ")[0]}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="w-12 h-12 bg-[#e50914] text-white py-1 px-3 rounded-full shadow-xl active:bg-red-400"
            >
              <i class="fas fa-sign-out-alt"></i>
            </button>
          </nav>
        )}
      </header>
    </div>
  );
}
export default Header;
