import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Bank from "./pages/bank/Bank";
import Admin from "./pages/admin/Admin";
import Login from "./components/login/Login";
import Home from "./pages/website/home/Home";
import Operations from "./pages/website/operations/Operations";
import Comments from "./pages/website/comments/Comments";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Bank />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
