import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Landing";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This MERN Full Stack app is made using react, react-router, node.js
            with express, full AJAX with axios get and post requests, JWT and
            authentication methods, for styling is used styled-components.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
