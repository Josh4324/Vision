import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import "./App.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Category from "./components/Category";
import Goal from "./components/Goal";
import Download from "./components/Download";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
        <Route exact path="/goals" element={<Goal />} />
        <Route exact path="/download" element={<Download />} />
        <Route exact path="/category/:category" element={<Category />} />
      </Routes>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
