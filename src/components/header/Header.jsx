import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useUserAuthenticationContext } from "../../context/UserContext";
import style from './Header.module.scss'
import Logo from '../../assets/img/logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const { isAuthenticated, user } = useUserAuthenticationContext();
    // if (!isAuthenticated) {
    //     window.location.replace('http://localhost:5175/');
    // }

    return (
        <header className={style.header}>
          <div><img src={Logo} alt="logo" /></div>
          {/* <div>
            {user && (
              <div className={style.user}>
                <img className={style.user_img} src={user.picture} alt={user.name} />
                <h3>{user.name}</h3>
              </div>
            )}
          </div> */}
          <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <FaBars />
          </div>
          <nav className={`${style.menu} ${isOpen ? "open" : ""}`}>
            <ul>
              <li>Opção 1</li>
              <li>Opção 2</li>
              <li>Opção 3</li>
            </ul>
          </nav>
        </header>
      );
      
}

export default Header;
