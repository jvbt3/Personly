import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Funcionario from './components/pages/Pessoa';
import Contato from './components/pages/Contato';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NewFuncionario from './components/pages/NewFuncionario';



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/funcionarios' element={<Funcionario />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/newfuncionario' element={<NewFuncionario />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
