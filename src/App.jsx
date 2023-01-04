import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";

function App() {
  const [count, setCount] = useState(0);
  const { addressData } = useStateContext();
  console.log(addressData.data);

  return (
    <>
      <Header />
      <Terms />
      <Footer />
    </>
  );
}

export default App;
