import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
        //add signOut
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        // console.log(uid, email, displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="w-full bg-transparent m-4">
      <header className="flex justify-between items-center p-0">
        <h1 className="text-white text-3xl font-bold">MovieGPT</h1>
        {user && (
          <nav className="flex items-center gap-4">
            <button
              onClick={handleSignOut}
              className="bg-[#e50914] text-white py-1 px-3 rounded-md shadow-xl active:bg-red-400"
            >
              Sign Out
            </button>
            <img src="user?.photoURL" alt="avatar" />
            <span className="text-white">{user?.displayName}</span>
          </nav>
        )}
      </header>
    </div>
  );
}
export default Header;
