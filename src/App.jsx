import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import LogInPage from "./pages/LogInPage";
// import data from "../public/data"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "loginpage",
        element: <LogInPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
