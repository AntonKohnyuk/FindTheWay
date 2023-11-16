import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <p>An application that uses an algorithm to find the way out of a maze</p>
      <div>
        <Link to={"/main"}>Get started</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
