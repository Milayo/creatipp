import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import CreatorsPage from "./pages/creatorspage";
import Footer from "./components/common/footer";
import CreatorPage from "./pages/creatorpage";
import SignIn from "./components/SignInPage/signin";
import SignUp from "./components/SignUpPage/signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import HelpSection from "./helpspage/helps";
import FaqPage from "./pages/faqpage";

function App() {
  return (
    <div className="bg-black pb-36">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/creators" element={<CreatorsPage />}></Route>
        <Route path="/creator" element={<CreatorPage />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/faqs" element={<FaqPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/help" element={<HelpSection />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
