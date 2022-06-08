import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page not found</h3>
        <p>The page you are looking for was not found</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
}
export default Error;
