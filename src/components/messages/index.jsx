import { Svg4, Svg5 } from "../../constants";
import Button from "../button";
import "./index.scss";

const Messages = () => {
  return (
    <>
      <section className="message">
        <div className="container">
          <div className="content">
            <h4>STEP 3</h4>
            <h2>Send Emails & Text Messages</h2>
            <p className="p">
              No more going through a social platform. Reach and engage your
              audience directly over email and text massage.
            </p>
          </div>
          <div className="content_w">
            <div className="content_left">
              <h4>Create & Share</h4>
              <h2>Reach Your</h2>
              <h2>
                Audience <span>Directly.</span>
              </h2>
              <p className="pone">
                <Svg4 />
                Embed content or create something new to share.
              </p>

              <p>
                <Svg5 /> Share content over email, text message or your
                homepage.
              </p>
              <h3>
                Turn your audience into email and text message subscribers.
              </h3>
              <div className="buttons">
                <Button
                  title={"Get Started Now"}
                  className={"right"}
                  color={"w"}
                  w={"48%"}
                  h={"50px"}
                  bg={"."}
                />
                <Button
                  title={"View A Demo"}
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

export default Messages;
