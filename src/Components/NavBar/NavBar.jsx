import { CustomNav } from "./index";
import logo from "../../assets/logo.svg";
import { StyledContainer } from "../../globalStyles";
import { Link } from "react-router-dom";

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
