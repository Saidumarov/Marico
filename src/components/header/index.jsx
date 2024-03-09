import "./index.scss";
import logo from "../../assets/images/logo.png";
import Button from "../button";
import Svg from "../../constants";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const siteBar = () => {
    setActive(!active);
  };
  return (
    <header>
      <div className="container">
        <div className="header_item">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>Marico</h1>
          </div>
          <div className={`header_item_main ${active ? "active" : ""}`}>
            <div className="logo1">
              <img src={logo} alt="" />
              <h1>Marico</h1>
            </div>
            <div className="header_a">
              <a href="#" id="one">
                Use Cases
                <Svg />
              </a>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
            </div>
            <div className="register_w">
              <Button
                title={"Login"}
                className={"login"}
                w={"119px"}
                h={"50px"}
              />
              <Button
                title={"Sign Up"}
                className={"register"}
                color={"w"}
                w={"119px"}
                h={"50px"}
                bg={"."}
              />
            </div>
          </div>
          <div
            className={`site_bar ${active ? "active" : ""}`}
            onClick={siteBar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
