import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Aliados from "./routes/Aliados";
import Contacto from "./routes/Contacto";
import Galeria from "./routes/Galeria";
import Nosotros from "./routes/Nosotros";
import Noticias from "./routes/Noticias";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

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
