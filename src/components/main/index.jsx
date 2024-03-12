import Button from "../button";
import "./index.scss";
import img from "../../assets/images/Dot.png";
import { Svg1, Svg2, Svg3 } from "../../constants";
import { useEffect, useState } from "react";
const Main = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count < 1000) {
        setcount(count + 1);
      }
    }, 1);
  }, [count]);
  return (
    <>
      <main>
        <div className="container">
          <h2 className="text" data-aos="fade-up">
            Own your audience.
          </h2>
          <h2 className="text1" data-aos="fade-up">
            So you don't lose them
          </h2>
          <div className="btns_w" data-aos="fade-up">
            <h3>Turn your audience into email and text message subscribers.</h3>
            <div className="buttons">
              <Button
                title={"View A Demo"}
                className={"right"}
                color={"w"}
                w={"48%"}
                h={"55px"}
                bg={"."}
              />
              <Button
                title={"Get Started Now"}
                className={"left"}
                w={"48%"}
                h={"55px"}
                border={"1px"}
              />
            </div>
            <div className="dot_w">
              <img src={img} alt="" className="dot" />
              <p>
                <span className="count"> {count}+</span>
                <span> creators have already started</span>
              </p>
            </div>
          </div>
          <div className="marico">
            <h2 data-aos="fade-up">Why Creators Love Marico </h2>
            <div className="marico_wrapper" data-aos="fade-up">
              <div className="card_marico">
                <h3>
                  <Svg1 /> Reduced Anxiety
                </h3>
                <p>Never worry about losing your audience.</p>
              </div>
              <div className="card_marico">
                <h3>
                  <Svg2 />
                  Lower Workload
                </h3>
                <p>Just share one link. We'll handle the rest.</p>
              </div>
              <div className="card_marico">
                <h3>
                  <Svg3 /> More Time
                </h3>
                <p>Spend less time on marketing tools</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
