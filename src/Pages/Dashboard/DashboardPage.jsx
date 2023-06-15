import { NavBarRegister } from "../../Components/NavBar/NavBar";
import { StyledContainer } from "../../globalStyles";
import { BoxStyled } from ".";
import { MainContent } from ".";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledContainer>
      <NavBarRegister text="Sair" onClick={logout} />

      <BoxStyled>
        <div className="contentBox">
          <h3>Olá, {user.name}</h3>
          <span>{user.course_module}</span>
        </div>
      </BoxStyled>
      <MainContent>
        <div className="contentBox">
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <span>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </span>
        </div>
      </MainContent>
    </StyledContainer>
  );
}
