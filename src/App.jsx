// import st from "./styles/App.module.scss";
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage';
import GamePage from './pages/GamePage/GamePage';
import CardsPage from './pages/CardsPage/CardsPage';
import Missing from './pages/Missing/Missing'
import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
