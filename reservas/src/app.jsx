import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';


// Páginas
import Inicio from './login/inicio.jsx';
import Registrate from './login/registrate.jsx';
import Profesional from './login/profesional.jsx';
import MisCitas from './login/miscitas.jsx';
import HorarioProfesional from './login/horariop.jsx';
import Agendar from './login/agendar.jsx';
import Pagos from './login/pagos.jsx';
import Horariop from './login/horariop.jsx';
import Cliente from './login/cliente.jsx';
import Horariog from './login/horariog.jsx';
import Profesion from './login/profesion.jsx';
import CitasProfesional from './login/citasprofesional.jsx';
import Confirmacion from './login/confirmacion.jsx';
import Pasarela from './login/pasarela.jsx';
import Failed from './login/failed.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrate" element={<Registrate />} />
          <Route path="/profesional" element={<Profesional />} />
          <Route path="/miscitas" element={<MisCitas />} />
          <Route path="/horariop" element={<Horariop />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/horariog" element={<Horariog />} />
          <Route path="/profesion" element={<Profesion />} />
          <Route path="/citasprofesional" element={<CitasProfesional />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/pasarela" element={<Pasarela />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App;
