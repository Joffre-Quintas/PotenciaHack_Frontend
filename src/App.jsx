import Login from './pages/Login/Login';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import { UserProvider } from './context/UserContext';
import Header from './components/header/Header';
import TestePerfil from './pages/TestePerfil/TestePerfil';
import TestePerfilRadio from './pages/TestePerfilRadio/TestePerfilRadio';
import StudentHome from './pages/StudentHome/StudentHome';
import TesteResultado from './pages/TesteResultado/TesteResultado';
import AllCourses from './pages/AllCourses/AllCourses';
import TrilhaEspecifica from './pages/TrilhaEspecifica/TrilhaEspecifica';



function App() {
  

  return (
    <BrowserRouter>

      {/* <UserProvider> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        <Route path='/allcourses' element={<AllCourses />} />
        <Route path="/student/:id" element={<StudentHome />} />
        <Route path="/testeperfil" element={<TestePerfil />} />
        <Route path="/testeresultado" element={<TesteResultado />} />
        <Route path="/testeperfilradio" element={<TestePerfilRadio />} />
        <Route path="/trilhaespecifica/:id" element={<TrilhaEspecifica />} />
        
      </Routes>
      {/* </UserProvider> */}

    </BrowserRouter>
  );
}
export default App;