import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Mainpage from './Components/Mainpage';
import AboutQLess from './Components/AboutQLess';
import CardChoices from './Components/CardChoices';
import NavBar from './Components/NavBar';
import SignUpPage from './Components/SignUpPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Mainpage />} />
            <Route exact path='/Home' element={<Mainpage/>}/>
            <Route exact path="/Cards" element={<CardChoices />} />
            <Route exact path="/AboutUs" element={<AboutQLess />} />
            <Route exact path="/SignUpPage" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
