import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import FormPage from "./pages/FormPage";
import "react-toastify/dist/ReactToastify.css";
import Documents from "./pages/Documents";

function App() {
  const [proceed, setProceed] = useState(false);
  const [next, setNext] = useState(false);
  const { deliveryData } = useStateContext();

  return (
    <Box sx={{ background: "#f6f6f6" }}>
      <Header />
      {proceed && next ? (
        <FormPage />
      ) : next ? (
        <Terms setProceed={setProceed} data={deliveryData.data.data} />
      ) : (
        <Documents setNext={setNext} data={deliveryData.data.require_data} />
      )}
      <Footer />
      <ToastContainer />
    </Box>
  );
}

export default App;
