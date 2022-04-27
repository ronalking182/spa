import './App.css';
import NavBar from './components/navigation/nav-bar';
import FooterBar from './components/footer/footer'
import AnimatedRoutes from './components/routes/animated-routes';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div >
      <Router >
    <NavBar/>
     <AnimatedRoutes/>
    <FooterBar/>
    </Router>
    </div>
  );
}

export default App;
