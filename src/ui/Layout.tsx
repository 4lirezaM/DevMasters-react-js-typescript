import { Outlet } from "react-router";
import Footer from "../features/Footer/Footer";
import Header from "../features/Header/Header";
function Layout() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
