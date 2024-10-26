import Nav from "../Nav";

const Footer = () => {
  const footerLinks = [
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
    <footer>
      <Nav list={footerLinks} />
    </footer>
  );
};
export default Footer;
