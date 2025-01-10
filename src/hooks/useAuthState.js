import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";
import { addUser, removeUser } from "../store";

function UseAuthState() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService.auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // Update the store with user data
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        // Redirect only if the user is on a restricted route (e.g., Login)
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());

        // Redirect to Login if the user is not authenticated and is on a protected route
        if (location.pathname.startsWith("/browse")) {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location]);

  return user;
}

export default UseAuthState;
