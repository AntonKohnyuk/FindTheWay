import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles/welcomePage.scss";

const WelcomePage = () => {
  return (
    <div className="info">
      <p>An application that uses an algorithm to find the way out of a maze</p>
      <div>
        <Link to={"/main"}>
          <Button variant="contained" size="large">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
