import { useContext } from "react";
import { GlobalStyle } from "./globalStyles";
import { RoutesMain } from "./Routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "./providers/userProvider";
import { LoadingContainer } from "./Pages/Dashboard";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      <GlobalStyle />
      {loading ? (
        <LoadingContainer>
          <h2>Carregando...</h2>
        </LoadingContainer>
      ) : (
        <RoutesMain />
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
