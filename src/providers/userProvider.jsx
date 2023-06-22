import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserContext = createContext({});

export const UseProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [techList, setTechList] = useState([]);

  const currentPath = window.location.pathname;

  const userLogin = async (formData, setSubmitting) => {
    try {
      setSubmitting(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
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
      console.log(error);
    }
    setSubmitting(false);
  };

  const addTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia adicionada com sucesso!");
      setTechList((prevTechList) => [...prevTechList, data])
      closeModal();
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
        await api.delete(`/users/techs/${techId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        setTechList((prevTechList) =>
      prevTechList.filter((tech) => tech.id !== techId)
    );
    } catch (error) {
        toast.error(`${error.message}`)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
      try {
        //   setLoading(true);
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechList(data.techs);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
      } //finally {
      //       setLoading(false);
      //    }
    };

    if (token && id) {
      loadUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, userLogin, userRegister, logout, techList, addTech, deleteTech}}
    >
      {children}
    </UserContext.Provider>
  );
};