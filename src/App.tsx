import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register.tsx";
import Login from "./pages/Login/Login.tsx";
import Courses from "./pages/Courses/Courses.tsx";
import CourseOverview from "./pages/CourseOverview/CourseOverview.tsx";
import Articles from "./pages/Articles/Articles.tsx";
import ArticleView from "./pages/ArticleView/ArticleView.tsx";
import Search from "./pages/Search/Search.tsx";
import Layout from "./ui/Layout";
import AppProvider from "./context/AppContext.tsx";
import Loading from "./features/Loading/Loading.tsx";
import CoursePlayer from "./pages/CoursePlayer/CoursePlayer.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Register /> },
      { path: "/loading", element: <Loading /> },
      { path: "/notfound", element: <NotFound /> },
      { path: "/signin", element: <Login /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courseoverview/:coursename", element: <CourseOverview /> },
      {
        path: "/courseplayer/:categoryname/:coursename/:sessionid",
        element: <CoursePlayer />,
      },
      { path: "/articles", element: <Articles /> },
      { path: "/articles/:articlename", element: <ArticleView /> },
      { path: "/articles", element: <Articles /> },
      { path: "/search/:query", element: <Search /> },
    ],
  },
  {
    path: "/panel",
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
