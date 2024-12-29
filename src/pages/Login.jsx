import React, { useRef, useState } from "react";
import { Header } from "../components";
import { Footer } from "../components";
import { authService, checkValidateData } from "../utils";
import ReCAPTCHA from "react-google-recaptcha";

const reCaptchaKey = import.meta.env.VITE_SITE_KEY;

function Login() {
  const [isSignin, setIsSignin] = useState(true);
  const [error, setError] = useState(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleRecaptchaChange = (value) => {
    if (value) {
      setRecaptchaVerified(true);
      setError(null); // Clear error if reCAPTCHA is verified
    } else {
      setRecaptchaVerified(false);
    }
  };

  const toggleForm = () => setIsSignin(!isSignin);

  async function handleSignIn() {
    if (!recaptchaVerified) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }
    try {
      const error = await authService.signIn(
        email.current.value,
        password.current.value
      );
      setError(`${error.errorCode} - ${error.errorMessage}`);
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    }
  }

  async function handleSignUp() {
    if (!recaptchaVerified) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }
    try {
      const error = await authService.signUp(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setError(`${error.errorCode} - ${error.errorMessage}`);
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  }

  function handleButtonClick() {
    const validationError = checkValidateData(
      email.current.value,
      password.current.value
    );
    if (validationError) {
      setError(validationError);
      return;
    }
    if (isSignin) {
      handleSignIn();
    } else {
      handleSignUp();
    }
  }

  return (
    <>
      <div
        className="w-full h-[110vh] flex flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(background.jpeg)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-[110vh] flex flex-wrap justify-center bg-white/10 backdrop-blur-lg sm:bg-transparent sm:backdrop-blur-none">
          <Header />
          <div className="w-full sm:w-2/3 lg:w-1/4 sm:h-auto sm:bg-white/10 sm:backdrop-blur-lg rounded-lg sm:shadow-lg p-8 mb-20">
            <h1 className="font-title text-white text-3xl mb-6 font-semibold">
              {isSignin ? "Sign In" : "Sign Up"}
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              {!isSignin && (
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white text-sm mb-2">
                    Name
                  </label>
                  <input
                    ref={name}
                    type="text"
                    id="name"
                    className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/80"
                    placeholder="Enter your name"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-sm mb-2">
                  Email
                </label>
                <input
                  ref={email}
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
                  ref={password}
                  type="password"
                  id="password"
                  className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/80"
                  placeholder="Enter your password"
                />
              </div>
              <ReCAPTCHA
                sitekey={reCaptchaKey}
                onChange={handleRecaptchaChange}
                style={{
                  transform: "scaleY(0.7) scaleX(0.85)",
                  alignSelf: "center",
                }}
              />
              <p className="text-[#e50914]">{error}</p>
              <button
                type="submit"
                onClick={handleButtonClick}
                className="bg-[#e50914] text-white p-2 rounded-md shadow-xl w-full active:bg-red-400"
                disabled={!recaptchaVerified}
              >
                {isSignin ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <p className="text-white text-sm mt-6 text-left">
              {isSignin ? "New to MovieGPT? " : "Already have an account? "}
              <span
                className="text-primary-500 underline cursor-pointer"
                onClick={toggleForm}
              >
                {isSignin ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
