import { NavBarDashboard } from "../../Components/NavBar/NavBar";
import { StyledContainer } from "../../globalStyles";
import { BoxStyled } from ".";
import { MainContent } from ".";
import { ButtonStyled } from "../../Styles/Button";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { TechList } from "../../Components/TechList";
import { CustomModal, LoadingContainer } from ".";
import Modal from "react-modal";
import React, { useState } from "react";
import { InputStyled } from "../../Styles/Input";
import { CustomForm } from "../Home";
import { CustomSelect } from "../Register";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const {
    user,
    addTech,
    techList,
    deleteTech,
    editTech,
    setTechList,
    setUser,
  } = useContext(UserContext);

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const currentPath = window.location.pathname;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  function openCreateModal() {
    setCreateModalIsOpen(true);
  }

  function openEditModal(tech) {
    setSelectedTech(tech);
    setEditModalIsOpen(true);
  }

  function closeCreateModal() {
    setCreateModalIsOpen(false);
  }

  function closeEditModal() {
    setSelectedTech(null);
    setEditModalIsOpen(false);
  }

  function submit(formData) {
    if (selectedTech) {
      editTech(selectedTech.id, formData);
      closeEditModal();
    } else {
      addTech(formData);
      closeCreateModal();
    }
  }

  function handleDelete() {
    if (selectedTech) {
      deleteTech(selectedTech.id);
      closeEditModal();
    }
  }

  Modal.setAppElement("#root");

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <h2>Carregando...</h2>
        </LoadingContainer>
      ) : (
        <>
          <StyledContainer>
            <NavBarDashboard text="Sair" />
          </StyledContainer>
          <BoxStyled>
            <div className="contentBox">
              <h3>Olá, {user.name}</h3>
              <span>{user.course_module}</span>
            </div>
          </BoxStyled>
          <StyledContainer>
            <MainContent>
              <div className="mainHeader">
                <h3>Tecnologias</h3>
                <ButtonStyled
                  className="addButton"
                  backgroundcolor="var(--color-grey-3)"
                  onClick={openCreateModal}
                >
                  +
                </ButtonStyled>
              </div>
              <div className="contentBoxMain">
                {techList && techList.length > 0 ? (
                  <>
                    <ul>
                      {techList.map((tech, index) => (
                        <TechList
                          key={index}
                          tech={tech}
                          onClick={() => openEditModal(tech)}
                        />
                      ))}
                    </ul>
                  </>
                ) : (
                  <div>
                    <h3>Nenhuma tecnologia encontrada</h3>
                    <span>Adicione tecnologias à lista</span>
                  </div>
                )}
              </div>
            </MainContent>
          </StyledContainer>
          <CustomModal
            isOpen={createModalIsOpen}
            onRequestClose={closeCreateModal}
            style={{
              overlay: {
                background: "rgba(18, 18, 20, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              content: {
                margin: "1rem",
                boxSizing: "border-box",
              },
            }}
            contentLabel="Create Modal"
          >
            <div className="modalContainer">
              <div className="modalHeader">
                <h2>Cadastrar tecnologia</h2>
                <button onClick={closeCreateModal}>X</button>
              </div>
              <CustomForm onSubmit={handleSubmit(submit)}>
                <label htmlFor="tecnology">Nome</label>
                <InputStyled
                  type="text"
                  name="title"
                  id="tecnology"
                  placeholder="Digite o nome da tecnologia"
                  required
                  {...register("title")}
                />
                <label htmlFor="modulo">Selecionar status</label>
                <CustomSelect
                  name="status"
                  id="status"
                  style={{ border: "1px solid var(--color-grey-0)" }}
                  required
                  {...register("status")}
                >
                  <option value="" hidden>
                    Selecionar status
                  </option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </CustomSelect>

                <ButtonStyled
                  type="submit"
                  backgroundcolor="var(--color-color-primary)"
                  disabled={submitting}
                  className="registerButton"
                >
                  {submitting ? "cadastrando..." : "Cadastrar tecnologia"}
                </ButtonStyled>
              </CustomForm>
            </div>
          </CustomModal>
          <CustomModal
            isOpen={editModalIsOpen}
            onRequestClose={closeEditModal}
            style={{
              overlay: {
                background: "rgba(18, 18, 20, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              content: {
                margin: "1rem",
                boxSizing: "border-box",
              },
            }}
            contentLabel="Edit Modal"
          >
            <div className="modalContainer">
              <div className="modalHeader">
                <h2>Tecnologia detalhes</h2>
                <button onClick={closeEditModal}>X</button>
              </div>
              <CustomForm onSubmit={handleSubmit(submit)}>
                <label htmlFor="tecnology">Nome</label>
                <InputStyled
                  type="text"
                  name="title"
                  id="tecnology"
                  placeholder="Digite o nome da tecnologia"
                  required
                  defaultValue={selectedTech?.title}
                  readOnly={!!selectedTech}
                />
                <label htmlFor="modulo">Selecionar status</label>
                <CustomSelect
                  name="status"
                  id="status"
                  style={{ border: "1px solid var(--color-grey-0)" }}
                  required
                  defaultValue={selectedTech?.status}
                  {...register("status")}
                >
                  <option value="" hidden>
                    Selecionar status
                  </option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </CustomSelect>
                <div className="buttonsFooter">
                  <ButtonStyled
                    type="submit"
                    backgroundcolor="var(--color-color-primary)"
                    disabled={submitting}
                    className="registerButton"
                  >
                    {submitting ? "Salvando..." : "Salvar alterações"}
                  </ButtonStyled>

                  <ButtonStyled
                    type="button"
                    backgroundcolor="var(--color-red)"
                    disabled={submitting}
                    onClick={handleDelete}
                    className="deleteButton"
                  >
                    Excluir
                  </ButtonStyled>
                </div>
              </CustomForm>
            </div>
          </CustomModal>
        </>
      )}
    </>
  );
}
