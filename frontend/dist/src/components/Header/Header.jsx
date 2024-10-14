import React, { useEffect } from "react";
import { links } from "../../Data";
import { FaStream } from "react-icons/fa";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);
  return (
    <>
      <header className={`${scrollHeader ? "scroll-header" : ""} header`}>
        <nav className="nav container">
          <Link to="/" onClick={scrollTop} className="nav__logo">
            <h2 className="nav__logo">
              Portfo<span>lio</span>
            </h2>
          </Link>
          <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                      className="nav__link"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
            <FaStream />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
