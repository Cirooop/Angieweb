
import './App.css'
import Navbar from './components/Navbar'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginModal = location.pathname === '/login';

  const closeModal = () => navigate ('/home');

  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     {}
     {isLoginModal && <Login onClose={closeModal}/>}
    </>
  )
}

export default App
