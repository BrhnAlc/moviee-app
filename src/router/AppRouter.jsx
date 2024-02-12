
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";



export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<MovieDetail />} />
         
        
      </Routes>

    </BrowserRouter>
  );
}