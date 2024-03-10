import { Svg4, Svg5 } from "../../constants";
import Button from "../button";
import "./index.scss";
const Content = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="content">
            <h4>STEP 1</h4>
            <h2>Connect Your Content</h2>
            <p className="p">
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
            <Button
              title={"Get Started Now"}
              className={"bottom"}
              w={"265px"}
              h={"55px"}
              border={"1px"}
            />
          </div>
          <div className="content_w">
            <div className="content_left">
              <h4>Your Homepage</h4>
              <h2>Your Content.</h2>
              <h2>
                All in <span>One Spot</span>
              </h2>
              <p className="pone">
                <Svg4 /> Bring all of your content together into one homepage.
              </p>

              <p>
                <Svg5 /> Your page automatically updates whenever you create.
              </p>
              <h3>
                Turn your audience into email and text message subscribers.
              </h3>
              <div className="buttons">
                <Button
                  title={"View A Demo"}
                  className={"right"}
                  color={"w"}
                  w={"48%"}
                  h={"50px"}
                  bg={"."}
                />
                <Button
                  title={"Get Started Now"}
                  className={"left"}
                  w={"48%"}
                  h={"50px"}
                  border={"1px"}
                />
              </div>
            </div>
            <div className="content_right"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
