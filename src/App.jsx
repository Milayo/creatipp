import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import CreatorsPage from "./pages/creatorspage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/creators" element={<CreatorsPage />}></Route>
      </Routes>{" "}
    </div>
  );
}

export default App;
