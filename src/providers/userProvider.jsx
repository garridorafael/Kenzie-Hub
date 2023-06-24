import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { techContext } from "./techProvider";

export const UserContext = createContext({});
const currentPath = window.location.pathname;

export const UseProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const { setTechList } = useContext(techContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechList(data.techs);
        navigate(currentPath);
      } catch (error) {
        toast.error(`${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
      loadUser();
    }
  }, []);

  const userLogin = async (formData, setSubmitting) => {
    try {
      setLoading(true);
      setSubmitting(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      setTechList(data.user.techs);
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
      toast.error(`${error.message}`);
      setSubmitting(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  const userRegister = async (formData, setSubmitting) => {
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
      toast.error(`${error.message}`);
    }
    setSubmitting(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userRegister,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
