import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import "./App.css";
import Category from "./components/Category";
import Goal from "./components/Goal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
        <Route exact path="/goals" element={<Goal />} />
        <Route exact path="/category/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
