import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import authService from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";

function UseAuthState() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService.auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(user);
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return user;
}

export default UseAuthState;
