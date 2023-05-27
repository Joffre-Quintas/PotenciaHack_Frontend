import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import './Header.scss'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h2>DesenvolvaTech</h2>
            <div className="profile">
                <img src="caminho_da_foto" alt="Foto de Perfil" />
                <p>Nome do Usuário</p>
            </div>
            {/* <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <FaBars />
            </div> */}
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        {/* Adicione mais opções de menu conforme necessário */}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
