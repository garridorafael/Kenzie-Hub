import { StyledContainerRegister } from ".";
import { CustomForm } from "../Home/index";
import { CustomSelect } from ".";
import { ButtonStyled } from "../../Styles/Button";
import { InputStyled } from "../../Styles/Input";
import { NavBarRegister } from "../../Components/NavBar/NavBar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../Components/FormSchema";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = async (formData) => {
    setSubmitting(true);
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Erro! Por favor, revise os campos e tente novamente", {
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
    <StyledContainerRegister>
      <NavBarRegister text="Voltar" />
      <CustomForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>

        <span>Rápido e grátis, vamos nessa</span>

        <label htmlFor="name">Nome</label>
        <InputStyled
          style={{ border: "none" }}
          type="text"
          name="name"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}

        <label htmlFor="email">Email</label>
        <InputStyled
          style={{ border: "none" }}
          type="email"
          name="email"
          id="email"
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        />
        {errors.email ? <p>{errors.email.message}</p> : null}

        <label htmlFor="password">Senha</label>
        <InputStyled
          style={{ border: "none" }}
          type="password"
          name="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}

        <label htmlFor="confirmPassword"> Confirmar Senha</label>
        <InputStyled
          style={{ border: "none" }}
          type="password"
          name="confirm"
          id="confirm"
          placeholder="Digite aqui sua senha"
          {...register("confirm")}
        />
        {errors.confirm ? <p>{errors.confirm.message}</p> : null}

        <label htmlFor="bio">Bio</label>
        <InputStyled
          style={{ border: "none" }}
          type="text"
          name="bio"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio ? <p>{errors.bio.message}</p> : null}

        <label htmlFor="contact">Contato</label>
        <InputStyled
          style={{ border: "none" }}
          type="text"
          name="contact"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact ? <p>{errors.contact.message}</p> : null}

        <label htmlFor="modulo">Selecionar Módulo</label>
        <CustomSelect
          style={{ border: "none" }}
          name="modulo"
          id="course_module"
          {...register("course_module")}
        >
          <option value="" hidden>
            Selecionar módulo
          </option>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </CustomSelect>
        {errors.course_module ? <p>{errors.course_module.message}</p> : null}

        <ButtonStyled
          backgroundcolor="var(--color-negative)"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Cadastrar"}
        </ButtonStyled>
      </CustomForm>
    </StyledContainerRegister>
  );
}
