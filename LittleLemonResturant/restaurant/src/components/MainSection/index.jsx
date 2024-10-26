import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Main;
