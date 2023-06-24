import { StyledContainer } from "../../globalStyles";
import { CustomForm } from "./index";
import { ButtonStyled, LinkStyled } from "../../Styles/Button";
import { InputStyled } from "../../Styles/Input";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";

export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [ submitting, setSubmitting ] = useState(false)

  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData, setSubmitting);
}

  return (
    <>
      <NavBar />
      <StyledContainer>
        <CustomForm onSubmit={handleSubmit(submit)} noValidate>
          <h2>Login</h2>

          <label htmlFor="email">Email</label>
          <InputStyled
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}

          <label htmlFor="password">Senha</label>
          <InputStyled
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <ButtonStyled
            type="submit"
            backgroundcolor="var(--color-color-primary)"
            disabled={submitting}
          >
            {submitting ? "Logando..." : "Entrar"}
          </ButtonStyled>

          <Link className="registerSpan" to="/register">
            Ainda não possui uma conta?
          </Link>

          <LinkStyled to="/register" backgroundcolor="var(--color-grey-1)">
            Cadastre-se
          </LinkStyled>
        </CustomForm>
      </StyledContainer>
    </>
  );
}
