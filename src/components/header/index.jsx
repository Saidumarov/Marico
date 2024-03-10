import "./index.scss";
import logo from "../../assets/images/logo.png";
import Button from "../button";
import Svg from "../../constants";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

const Header = () => {
  const [active, setActive] = useState(false);
  const siteBar = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);
  return (
    <Headroom
      style={{
        webkitTransition: "all .5s ease-in-out",
        mozTransition: "all .5s ease-in-out",
        oTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
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
              <div className="header_a" onClick={() => setActive(!active)}>
                <a href="#" id="one">
                  Use Cases
                  <Svg />
                </a>
                <a href="#" onClick={() => setActive(!active)}>
                  About
                </a>
                <a href="#" onClick={() => setActive(!active)}>
                  Pricing
                </a>
                <a href="#" onClick={() => setActive(!active)}>
                  Blog
                </a>
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
    </Headroom>
  );
};

export default Header;
