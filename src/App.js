import { Home } from './Components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Career from './Components/Pages/Career';
import ScrollToTop from './Components/ScrollToTop';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import Header from './Components/Header/Header';
import Hair from './Components/Pages/Hair';
import Aboutus from './Components/Pages/Aboutus';
import Facial from './Components/Pages/Facial';
import Package from './Components/Pages/Package';
import Waxing from './Components/Pages/Waxing';
import Honeywax from './Components/Pages/Honeywax';
import Ricawax from './Components/Pages/Ricawax';
import ManicureandPadicure from './Components/Pages/ManicureandPadicure';
import Bridal from './Components/Pages/Bridal';
import Contactus from './Components/Pages/Contactus';
import Bridal2 from './Components/Pages/Bridal2';
import Prebridal from './Components/Pages/Prebridal';
import FloatingWhatsapp from './Components/FloatingWhatsapp';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
            <NavbarMenu />
            <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/hair-cut-at-salon' element={<Hair/>}/>
          <Route path='/facial-at-Golden-honey' element={<Facial/>}/>
          <Route path='/package-of-golden-honey-salon' element={<Package/>}/>
          <Route path='/honey-wax-at-golden-honey-salon'  element={<Waxing/>}/>
          <Route path='/waxing-at-golden-honey-salon' element={<Honeywax/>}/>
          <Route path='/rica-wax-at-golden-honey' element={<Ricawax/>}/>
          <Route path='/manicure-pedicure-at-golden-honey' element={<ManicureandPadicure/>}/>
          <Route path='/bridal-at-golden-honey' element={<Bridal/>}/>
          <Route path='/pre-bridal-at-golden-honey' element={<Bridal2/>}/>
          <Route path='/bridal-makeup-at-golden-salon' element={<Prebridal/>}/>
          <Route path='/Contact-us' element={<Contactus />} />
          <Route path='/About-us' element={<Aboutus />} />
          <Route path='/Career' element={<Career />} />
          </Routes>
       </BrowserRouter>
       <FloatingWhatsapp />
    </div>
  );
}

export default App;
