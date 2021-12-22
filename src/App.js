import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
