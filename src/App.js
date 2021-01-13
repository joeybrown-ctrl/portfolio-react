import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Hero>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
    </Hero>
    <Footer />
    </>
  );
}

export default App;
