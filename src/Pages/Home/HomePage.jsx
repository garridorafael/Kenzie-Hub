import { StyledContainer } from "../../globalStyles";
import { CustomForm } from "./index";
import { ButtonStyled, LinkStyled } from "../../Styles/Button";
import { InputStyled } from "../../Styles/Input";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);

  const submit = async (formData) => {
    try {
      setSubmitting(true);
      const { data } = await api.post("/sessions", formData);
      console.log(data);
      localStorage.setItem("userData", JSON.stringify(data.user));
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha inválidos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    }
    setSubmitting(false);
  };
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
