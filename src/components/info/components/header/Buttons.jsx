import { Link } from "react-router-dom";

export default function Buttons({ value, path}) {
  return (
    <Link
      to={path}
      className="links-wrappers active"
    >
      {value}
    </Link>
  );
}
