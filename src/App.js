import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Criar from './components/pages/Create';
import Contato from './components/pages/Contato';
import Container from './components/latouys/Container';



function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/criar">Criar</Link>
        <Link to="/contato">Contato</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/criar' element={<Criar />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Container>
      <footer>footer</footer>
    </Router>
  );
}

export default App;
