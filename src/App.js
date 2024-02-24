
import './App.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen text-white">
      <AuthContextProvider>
         <AppRouter/>
         <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
