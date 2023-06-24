import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  const addTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia adicionada com sucesso!");
      setTechList((prevTechList) => [...prevTechList, data]);
      closeCreateModal();
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
      });
      setTechList((prevTechList) =>
        prevTechList.filter((tech) => tech.id !== techId)
      );
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const editTech = async (techId, formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList((prevTechList) => {
        const updatedTechList = prevTechList.map((tech) => {
          if (tech.id === techId) {
            return { ...tech, status: formData.status };
          }
          return tech;
        });

        return updatedTechList;
      });
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const closeCreateModal = () => {
    setCreateModalIsOpen(false);
    };

  return (
    <techContext.Provider
      value={{ techList, setTechList, addTech, editTech, deleteTech }}
    >
      {children}
    </techContext.Provider>
  );
};
