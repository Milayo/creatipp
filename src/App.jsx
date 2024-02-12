import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import CreatorsPage from "./pages/creatorspage";
import Footer from "./components/common/footer";
import FaqPage from "./pages/faqpage";

function App() {
  return (
    <div className="bg-black pb-36">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/creators" element={<CreatorsPage />}></Route>
        <Route path="/faqs" element={<FaqPage />}></Route>
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
