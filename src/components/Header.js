import React from "react";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="header__logo" />

      {!menuOpen && mobile ? (
        <div className="header__bars" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={Bars} alt="" />
        </div>
      ) : (
        <ul className="header__menu">
          <Link
            span={true}
            smooth={true}
            to="hero"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </Link>
          <Link
            span={true}
            smooth={true}
            to="programs"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Program
          </Link>
          <Link
            span={true}
            smooth={true}
            to="reason"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Why us
          </Link>
          <Link
            span={true}
            smooth={true}
            to="plans"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Plans
          </Link>
          <Link
            span={true}
            smooth={true}
            to="tesmionials"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Testimonials
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
