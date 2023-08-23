import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Pessoa from './components/pages/Pessoa';
import Contato from './components/pages/Contato';
import Container from './components/latouys/Container';
import Navbar from './components/latouys/Navbar';
import Footer from './components/latouys/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pessoa' element={<Pessoa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
