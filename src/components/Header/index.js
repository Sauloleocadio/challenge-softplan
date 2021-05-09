import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.jpg";
import "./style.css";

export default function Header() {
  const name = useSelector((state) => state.countrie);

  return (
    <header data-testid="header__field" className="containerheader">
      <Link to="/">
        <img
          data-testid="header__field--img"
          className="containerheader__logo"
          src={!name ? logo : name[0].flag}
          alt="Logo"
        />
      </Link>

      <Link className="containerheader__namecontries" to="/details">
        <div>
          <strong data-testid="header__field--strong">
            {!name ? "Countries of the world" : name[0].name}
          </strong>
        </div>
      </Link>
    </header>
  );
}
