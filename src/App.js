import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Switch,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (

    <>

     
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}></Route>
          <Route path='/about' element={ <About/>}></Route>
          <Route path='/contact' element={ <Contact/>}></Route>

        </Routes>
    
      </Router>

      <Footer/>
      </>
  );
}

export default App;
