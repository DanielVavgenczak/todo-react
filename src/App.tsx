import { GlobalStyle } from "./components/styles/globalComponent";
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import {Container, Header} from './components/styles/style';
import Logo from './assets/img/Vector.png';
import Nav from "./components/Nav/Nav"
import Todos from "./components/Todos";
import { TodoProvider } from "./contexts/TodoContext";
import Add from "./components/Add";

function App() {
  return (
    <TodoProvider>    
        <BrowserRouter>
          <Header>
            <Link to="/">
              <img src={Logo}  alt="logo"/>
            </Link>
            <Nav />
          </Header>
          <Container>    
            <Routes>
              <Route path="/" element={<Todos />} /> 
              <Route path="/add" element={<Add />} /> 
            </Routes>
          </Container>
        </BrowserRouter>
      <GlobalStyle />
    </TodoProvider>
  )
}

export default App
