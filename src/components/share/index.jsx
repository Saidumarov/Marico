import { Svg6 } from "../../constants";
import Button from "../button";
import "./index.scss";
const Share = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="share_w" data-aos="fade-up">
            <h4>STEP 2</h4>
            <h2>Share Your Homepage</h2>
            <p className="p">
              Share your Wavium homepage link with your followers, and we'll
              handle the rest.
            </p>
          </div>
          <div className="share_item_w">
            <div className="share_left" data-aos="flip-left">
              <h4>One Link</h4>
              <h2>
                <span>ALL You Create.</span> <br />
                One Link
              </h2>
              <div className="imgbg">
                <h4>9:41</h4>
                <div className="phone_w">
                  <div className="phone_w_item">
                    <p className="a">AA</p>
                    <p>
                      <Svg6 />
                    </p>
                    <p className="text_p">yourname.wavium.co</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="share_right" data-aos="flip-right">
              <h4>Collect Subscribers</h4>
              <h2>
                <span>
                  Emails. <br /> Phone #s.
                </span>
                <br />
                All Yours.
              </h2>
            </div>
          </div>
          <Button
            title={"Get Started "}
            className={"sharebtn"}
            color={"w"}
            w={"283px"}
            h={"55px"}
            bg={"."}
          />
        </div>
      </section>
    </>
  );
};

export default Share;
