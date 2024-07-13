import HomePage from './Components/HomePage.js';
import { Route,Routes} from "react-router-dom";
import About from './Components/About.js'
import Contact from './Components/Contact.js';
import Services from './Components/Services.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Footer from './Components/Footer.js';
import Suv from './Components/Suv.js';
import NavBar from './Components/NavBar.js';
import Hatchback from './Components/hatchback.js';
import Sedan from './Components/Sedan.js';
import Muv from './Components/Muv.js';
import Luxury from './Components/Luxury.js';
import Bookappoint from './Components/Bookappoint.js';

export default function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/hatchback' element={<Hatchback/>}/>
      <Route exact path='/bookappoint' element={<Bookappoint/>}/>
      <Route exact path='/suv' element={<Suv/>}/>
      <Route exact path='/sedan' element={<Sedan/>}/>
      <Route exact path='/muv' element={<Muv/>}/>
      <Route exact path='/luxury' element={<Luxury/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}
