import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import { useStateContext } from "./contexts/ContextProvider";
import Terms from "./pages/Terms";

function App() {
  const [count, setCount] = useState(0);
  const { addressData } = useStateContext();
  console.log(addressData.data);

  return (
    <>
      <Header />
      <Terms />
      <Form />
      {/* <HorizontalNonLinearStepper /> */}
      <Footer />
    </>
  );
}

export default App;
