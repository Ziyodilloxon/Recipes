// components
import { Navbar, Footer } from "../components";

// rrd imports
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="site-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
