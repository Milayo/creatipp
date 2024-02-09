import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>{" "}
    </div>
  );
}

export default App;
