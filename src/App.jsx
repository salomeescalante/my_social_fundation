import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom"
import { Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Aliados from "./pages/Aliados";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";
import Noticias from "./pages/Noticias";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ContactForm />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aliados">
            <Aliados />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/noticias">
            <Noticias />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
