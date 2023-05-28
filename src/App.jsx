import Login from './pages/Login/Login';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro';
import Home from './pages/Home/Home';
import { UserProvider } from './context/UserContext';
import Header from './components/header/Header';
import StudentHome from './pages/StudentHome/StudentHome';



function App() {
  const currentPath = window.location.pathname;

  const shouldRenderHeader = currentPath !== '/login' && currentPath !== '/cadastro';

  return (
    <BrowserRouter>
      {/* <UserProvider> */}
      {shouldRenderHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/student/:id" element={<StudentHome/>} />
        </Routes>
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}
export default App;