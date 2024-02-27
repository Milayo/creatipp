import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@lemonsqueezy/wedges";

const HeaderComponent = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4">
      <img src={Logo} alt="logo" />

      <div className="flex gap-4 px-2 py-1 rounded-xl font-primary text-white bg-[#121217]">
        <Link to="/creators">Creators</Link>
        <p>FAQs</p>
        <p>Help</p>
      </div>
      <div className="flex gap-x-2">
        <Button size="md" shape="pill" variant="secondary">
          Sign in
        </Button>
        <Button className="text-white" size="md" shape="pill" variant="outline">
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default HeaderComponent;
