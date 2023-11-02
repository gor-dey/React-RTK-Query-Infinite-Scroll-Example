import { createBrowserRouter } from "react-router-dom";
import { MainPage, PostPage } from "@pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <MainPage />;
    },
  },
  {
    path: "/post/:id",
    Component() {
      return <PostPage />;
    },
  },
]);

export { router };
