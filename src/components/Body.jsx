import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </>
  )
);

function Body() {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        // console.log(uid, email, displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
        //navigate("/");
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default Body;
