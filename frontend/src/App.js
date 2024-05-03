import "./index.css";
import LandingPage from "./pages/landingpage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerPage";
import MainPage from "./pages/mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarsPhotosPage from "./pages/marsphotosPage";
import EarthImagery from "./pages/earthImageryPage";

function App() {
  return (
   
    <div className="App">
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/rover" element={<MarsPhotosPage />} />
        <Route path="/earth" element={<EarthImagery />} />
      </Routes>
     
    </div>
  );
}

export default App;
