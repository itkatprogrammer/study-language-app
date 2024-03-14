// import st from "./styles/App.module.scss";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import GamePage from "./Components/GamePage/GamePage";
import CardsPage from "./Components/CardsPage/CardsPage";
import Missing from "./Components/Missing/Missing";
import Footer from "./Components/Footer/Footer";
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
