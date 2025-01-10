import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Layout from "./Layout";
import InfiniteScroll from "./InfiniteScroll";
import MovieDetails from "./MovieDetails";

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Layout />}>
        <Route index element={<Browse />} />
        <Route path="infinite-scroll/:type" element={<InfiniteScroll />} />{" "}
        <Route path="movie/:movieId" element={<MovieDetails />} />{" "}
      </Route>
    </>
  )
);

function Body() {
  return <RouterProvider router={appRouter} />;
}

export default Body;
