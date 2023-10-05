import './App.css';
import Catalog from './components/catalogPage.component';
import Footer from './components/footer.component';
import MainPage from './components/mainpage.component';
import MapPage from './components/mapPage.component';
import Navbar from './components/navbar.component';
import OneProduct from './components/OneProduct.component';

import {BrowserRouter as Router , Route , Routes,NavLink} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/catalog' element={<Catalog/>}></Route>
            <Route path='/contacts' element={<MapPage/>}></Route>
            <Route path='/product' element={<OneProduct/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    );
}

export default App;
