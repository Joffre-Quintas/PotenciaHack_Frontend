import Login from './pages/Login/Login';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro';
import Home from './pages/Home/Home';
import { UserProvider } from './context/UserContext';
import Header from './components/header/Header';
import TestePerfil from './pages/TestePerfil/TestePerfil';
import TestePerfilRadio from './pages/TestePerfilRadio/TestePerfilRadio';
import TesteResultado from './pages/TesteResultado/TesteResultado'



function App() {

  return (
    <BrowserRouter>
      {/* <UserProvider> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testeperfil" element={<TestePerfil />} />
          <Route path="/testeresultado" element={<TesteResultado />} />
          <Route path="/testeperfilradio" element={<TestePerfilRadio />} />
        </Routes>
      {/* </UserProvider> */}
    </BrowserRouter>

  )
}

export default App
