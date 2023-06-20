import { NavBarDashboard } from "../../Components/NavBar/NavBar";
import { StyledContainer } from "../../globalStyles";
import { BoxStyled } from ".";
import { MainContent } from ".";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function Dashboard() {
  const [user, setUser] = useState(null);

  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);

  useEffect(() => {
    if (parsedUserData) {
      setUser(parsedUserData);
    }
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null)
    navigate("/");
  };

  if (!user) {
    navigate("/")
    return null;
  }

  return (
    <>
    <StyledContainer>
      <NavBarDashboard text="Sair" onClick={logout} />
    </StyledContainer>
      <BoxStyled>
        <div className="contentBox">
          <h3>Olá, {user.name}</h3>
          <span>{user.course_module}</span>
        </div>
      </BoxStyled>
      <StyledContainer>
      <MainContent>
        <div className="contentBox">
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <span>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </span>
        </div>
      </MainContent>
    </StyledContainer>
    </>
  );
}
