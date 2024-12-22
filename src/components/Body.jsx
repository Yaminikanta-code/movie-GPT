import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </>
  )
);

function Body() {
  return <RouterProvider router={appRouter} />;
}

export default Body;
