import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(background.jpg)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-screen flex flex-wrap justify-center bg-white/10 backdrop-blur-lg sm:bg-transparent sm:backdrop-blur-none">
          <Header />
          <div className="w-full sm:w-2/3 lg:w-1/4 sm:h-2/3 sm:bg-white/10 sm:backdrop-blur-lg rounded-lg shadow-lg p-8">
            {" "}
            <h1 className="font-title text-white text-3xl mb-6 font-semibold">
              Sign In
            </h1>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/80"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-white text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/80"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-[#e50914] text-white p-2 rounded-md shadow-xl w-full active:bg-red-400"
              >
                Sign In
              </button>
            </form>
            <p className="text-white text-sm mt-6 text-left">
              New to MovieGPT?{" "}
              <a href="#" className="text-primary-500 underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;