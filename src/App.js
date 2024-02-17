
import './App.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen text-white">
      <AuthContextProvider>
      <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
