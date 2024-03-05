
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";



export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
         
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRouter/>}>
          <Route path="/details/:id" element={<MovieDetail />} />
          </Route>
          
         
        
      </Routes>

    </>
  );
}