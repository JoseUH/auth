import { useContext } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";

const Navigator = () => {
  const { jwt } = useContext(JwtContext);
  // console.log(jwt);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {jwt && (
          <>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </>
        )}
        {jwt === null && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
