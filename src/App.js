import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
  
    <Router>
    <Hero>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Hero>
    <Footer />
    </Router>
    
    </>
  );
}

export default App;
