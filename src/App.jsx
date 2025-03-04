import "./styles/index.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add-box" element={<Form />} />
        <Route path="/view-boxes" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
