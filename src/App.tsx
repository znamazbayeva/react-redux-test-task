import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    </div>
  );
}

export default App;
