import React from "react";
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <Header />
            <h1>Login</h1>
            <button>
                <Link to="/cadastro">Ir para Cadastro</Link>
            </button>
        </div>
    );
}
