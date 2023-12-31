import { CustomNav } from "./index";
import logo from "../../assets/Logo.svg";
import { StyledContainer } from "../../globalStyles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";

export function NavBar() {
  return (
    <StyledContainer>
      <CustomNav>
        <StyledContainer>
          <div>
            <img src={logo} alt="logo Kenzie Hub" />
          </div>
        </StyledContainer>
      </CustomNav>
    </StyledContainer>
  );
}

export function NavBarRegister({ text, onClick }) {
  return (
    <CustomNav>
      <div className="navContainer">
        <img src={logo} alt="logo Kenzie Hub" />
        <Link className="logout" to={"/"}>
          {text}
        </Link>
      </div>
    </CustomNav>
  );
}

export function NavBarDashboard({ text, onClick }) {

  const { logout } = useContext(UserContext);

  return (
    <CustomNav>
      <div className="navBox">
        <img src={logo} alt="logo Kenzie Hub" />
        <button className="logout" to={"/"} onClick={() => logout()}>
          {text}
        </button>
      </div>
    </CustomNav>
  );
}
