import logo from "./logo.svg";
import "./App.css";
import Singup from "./components/Singup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import NewPost from "./components/NewPost";
import DisplayPost from "./components/DisplayPost";
import MakeComment from "./components/MakeComment";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Singup></Singup>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/post",
          element: <NewPost></NewPost>,
        },
        {
          path: "/displaypost",
          element: <DisplayPost></DisplayPost>,
          loader: () => fetch("https://mern-stack-server-one.vercel.app/posts"),
        },
        {
          path: "/makeComment/:id",
          element: <MakeComment></MakeComment>,
          loader: ({ params }) =>
            fetch(
              `https://mern-stack-server-one.vercel.app/posts/${params.id}`
            ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
