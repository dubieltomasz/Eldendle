import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import WeaponGuesser from './routes/WeaponGuesser';
import CraftingGuesser from './routes/CraftingGuesser';
import BossGuesser from './routes/BossGuesser';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/eldendle/' element={<WeaponGuesser />} />
          <Route path='/eldendle/bossguesser' element={<BossGuesser />} />
          <Route path='/eldendle/craftingguesser' element={<CraftingGuesser />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App