import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import checkValidateData from "../utils/Validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//To get data from input boxes we can either use  onChange or onInput with state variables or use useRef to use reference of those input boxe
//Add name validation
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [IsSignin, setIsSignin] = React.useState(true);
  const [error, setError] = React.useState(null);
  function toggleForm() {
    setIsSignin(!IsSignin);
  }
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  function handleButtonClick() {
    //console.log(email)
    // console.log(email.current.value);
    // console.log(password.current.value);
    //console.log(password)
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setError(message);
    //Auth Logic
    if (message) {
      return;
    }
    if (IsSignin) {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              navigate("/browse");
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  }
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
          <div
            className="w-full sm:w-2/3 lg:w-1/4 sm:h-auto sm:bg-white/10 sm:backdrop-blur-lg rounded-lg sm:shadow-lg p-8 mb-20
        "
          >
            {" "}
            <h1 className="font-title text-white text-3xl mb-6 font-semibold">
              {IsSignin ? "Sign In" : "Sign Up"}
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              {!IsSignin && (
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white text-sm mb-2">
                    Name
                  </label>
                  <input
                    ref={name}
                    type="Name"
                    id="Name"
                    className="p-3 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/80"
                    placeholder="Enter your Name"
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
              <p className="text-red-500">{error}</p>
              <button
                type="submit"
                onClick={handleButtonClick}
                className="bg-[#e50914] text-white p-2 rounded-md shadow-xl w-full active:bg-red-400"
              >
                {IsSignin ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <p className="text-white text-sm mt-6 text-left">
              {IsSignin ? "New to MovieGPT? " : "Already have an account? "}
              <span
                className="text-primary-500 underline cursor-pointer"
                onClick={toggleForm}
              >
                {IsSignin ? "Sign Up" : "Sign In"}
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
