import LinkComponent from "../common/link";

const Nav = ({ list }) => {
  return (
    <nav className="nav">
      <ul>
        {list.map((link) => (
          <li>
            <LinkComponent to={link.to} text={link.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
