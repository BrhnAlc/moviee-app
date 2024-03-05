
import './App.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import MovieContextProvider from './context/MovieContext';


function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen text-white">
      <AuthContextProvider>
      <MovieContextProvider>
         <AppRouter/>
         <ToastContainer />
         </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
