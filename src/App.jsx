import Login from './pages/Login/Login';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro';
import Home from './pages/Home/Home';
import { UserProvider } from './context/UserContext';


function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
}

export default App
