import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
import Category from "./pages/Category/Category.tsx";
import AdminHome from "./pages/AdminPanel/AdminHome/AdminHome.tsx";
import AdminUsers from "./pages/AdminPanel/AdminUsers/AdminUsers.tsx";
import AdminContact from "./pages/AdminPanel/AdminContact/AdminContact.tsx";
import AdminSessions from "./pages/AdminPanel/AdminSessions/AdminSessions.tsx";
import AdminCategory from "./pages/AdminPanel/AdminCategory/AdminCategory.tsx";
import AdminCourses from "./pages/AdminPanel/AdminCourses/AdminCourses.tsx";
import PanelLayout from "./pages/AdminPanel/PanelLayout.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminMenus from "./pages/AdminPanel/AdminMenus/AdminMenus.tsx";
import AdminComments from "./pages/AdminPanel/AdminComments/AdminComments.tsx";

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
      { path: "/articles", element: <Articles /> },
      { path: "/courseoverview/:coursename", element: <CourseOverview /> },
      { path: "/category-info/:categoryname", element: <Category /> },
      {
        path: "/courseplayer/:categoryname/:coursename/:sessionid",
        element: <CoursePlayer />,
      },
      { path: "/articles", element: <Articles /> },
      { path: "/articles/:articlename", element: <ArticleView /> },
      { path: "/search/:query", element: <Search /> },
    ],
  },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [
      { index: true, element: <Navigate replace to="home" /> },
      { path: "home", element: <AdminHome /> },
      { path: "adminusers", element: <AdminUsers /> },
      { path: "adminmenus", element: <AdminMenus /> },
      { path: "admincourses", element: <AdminCourses /> },
      { path: "admincategory", element: <AdminCategory /> },
      { path: "admincontact", element: <AdminContact /> },
      { path: "adminsessions", element: <AdminSessions /> },
      { path: "admincomments", element: <AdminComments /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
