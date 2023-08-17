import './App.css';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import RoleSelection from './pages/Signup/RoleSelection';
import FreelancerSignUp from './pages/Signup/FreelanceS';
import CompanySignUp from './pages/Signup/CompanyS';
import Dashboard from './pages/Dashboard/Freelancer/Home/Dashboard';
import Footer from './components/Footer/Footer';
import Project from './pages/Dashboard/Freelancer/Projects/Project';
import Message from './pages/Dashboard/Freelancer/Support/Support';
import Profile from './pages/Dashboard/Freelancer/Profile/Profile';
import Support from './pages/Dashboard/Freelancer/Messages/Support';
import Earnings from './pages/Dashboard/Freelancer/Earnings/Earnings';
import Settings from './pages/Dashboard/Freelancer/Settings/Settings';
import SearchResults from './pages/Search/SearchResults';
import { useRole } from './context/RoleContext';
import Dashboard2 from './pages/Dashboard/Company/Home/Dashboard2';
import JobSearchResults from './pages/Search/JobSearchResults';
import { useEffect } from 'react';
import Jobs from './pages/Dashboard/Company/Jobs/Jobs';
import FreelanceSearchResults from './pages/Search/FreelanceSearchResults';
import Message2 from './pages/Dashboard/Company/Support/Support';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const { role } = useRole();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/search_results/:query' element={<JobSearchResults />} /> */}
        {/* <Route
          path='/search_results/:category/:query'
          element={<SearchResults />}
        /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/role-selection' element={<RoleSelection />} />
        <Route path='/signup/freelancer' element={<FreelancerSignUp />} />
        <Route path='/signup/company' element={<CompanySignUp />} />
        {/* FREELANCER */}
        {/* <Route path='/' element={<PrivateRoutes />}> */}
        <Route path='/freelancer/dashboard' element={<Dashboard />} />
        {/* <Route
          path={`/${role}dashboard`} // Renders the appropriate dashboard based on the role
          element={role === 'freelancer' ? <Dashboard /> : <Dashboard2 />}
        /> */}
        <Route path='/projects' element={<Project />}></Route>
        <Route
          path='/search/jobs'
          element={<JobSearchResults searchQuery={searchQuery} />}
        />
        <Route path='/freelancer/support' element={<Message />} />
        <Route path='/freelancer/profile' element={<Profile />} />
        <Route path='/earnings' element={<Earnings />} />
        <Route path='/freelancer/settings' element={<Settings />} />
        {/* CLIENT */}
        <Route path='/company/dashboard' element={<Dashboard2 />} />
        <Route path='/company/jobs' element={<Jobs />} />
        <Route path='/company/support' element={<Message2 />} />{' '}
        <Route path='/company/message' element={<Message />} />{' '}
        <Route
          path='/search/freelancers'
          element={<FreelanceSearchResults searchQuery={searchQuery} />}
        />
        <Route path='/user-details/:id' element={<FreelanceSearchResults />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
