import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Company from './components/Pages/Company';
import Projects from './components/Pages/Projects';

import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'



// Switch foi trocado por Routes

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">

          <Route exact path="/">
          <Home />
          </Route>

          <Route exact path="/company">
          <Company />
          </Route>

          <Route exact path="/contact">
          <Contact />
          </Route>

          <Route exact path="/projects">
          <Projects />
          </Route>

        </Container>
      </Switch>
     <Footer/>
    </Router>

  );
}


export default App;
