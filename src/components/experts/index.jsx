import "./index.scss";
import img from "../../assets/images/Image.png";
import logo from "../../assets/images/Logo (1).png";
import Button from "../button";
import img2 from "../../assets/images/Dot.png";

const Experts = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="experts">
            <h2 data-aos="fade-up">Experts Agree</h2>
            <div className="experts_w" data-aos="fade-up">
              <div className="card_ex">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="experts_w_two" data-aos="fade-up">
              <h2>
                We've helped over 1,000 creatorsre <br /> claim control of their
                audience.
              </h2>
            </div>
            <div className="extens_w_thre" data-aos="fade-up">
              <img src={logo} alt="" className="logo" />
              <h2>Get Started Now</h2>
              <h4>Setup is easy and takes under 5 minutes.</h4>
              <Button
                title={"Get Started Now"}
                className={"sharebtn"}
                color={"w"}
                w={"300px"}
                h={"60px"}
                bg={"."}
              />
              <div className="experts_w_img">
                <img src={img2} alt="" className="notD" />
                <p>
                  <span className="count1"> 1000+</span>
                  <span> creators have already started</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experts;
