import "./index.scss";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer_left">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="" />
                  <h2>Marico</h2>
                </a>
              </div>
              <p className="email">info@marico.co</p>
            </div>
            <div className="footer_right">
              <a href="#">Abour</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a href="#">Sign in</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
