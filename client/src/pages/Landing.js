import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Landing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

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
            with express, full AJAX with axios get and post requests, Mongo
            Atlas server with Mongoose, JWT and authentication methods, for
            styling is used styled-components.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
