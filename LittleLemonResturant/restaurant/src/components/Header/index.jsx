import LinkComponent from "../common/link";
import logo from "../../asset/icons/logo.svg";
import "./header.css";
import Nav from "../Nav";

const Header = () => {
  const headerLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
    {
      to: "/menu",
      text: "Menu",
    },
    {
      to: "/reservation",
      text: "Reservation",
    },
    {
      to: "/order",
      text: "Order Online",
    },
    {
      to: "/login",
      text: "Login",
    },
  ];
  return (
    <header className="header">
      <img src={logo} />
      <Nav list={headerLinks} />
    </header>
  );
};
export default Header;
