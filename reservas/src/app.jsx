import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';



// Páginas
import Inicio from './login/inicio.jsx';
import Registrate from './login/registrate.jsx';
import Profesional from './login/profesional.jsx';
import MisCitas from './login/miscitas.jsx';
import HorarioProfesional from './login/horarioprofesional.jsx';
import Agendar from './login/agendar.jsx';


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
          <Route path="/horarioprofesional" element={<HorarioProfesional />} />
          <Route path="/agendar" element={<Agendar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
