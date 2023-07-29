import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
// import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      {/* <Route path='/sign-up' element={<Signup />} /> */}
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
