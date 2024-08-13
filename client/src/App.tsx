import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Navbar = lazy(() => import("./components/navbar/navbar"));
const Footer = lazy(() => import("./components/footer/footer"));
const Loader = lazy(() => import("./components/loader/loader"));
const Home = lazy(() => import("./pages/home/home"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-center" />
    </Router>
  );
};

export default App;
