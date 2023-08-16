// Dashboard.js
import {
  useLocation,
  // useNavigate
} from 'react-router-dom';
import design from './dashboard2.module.css';
import MetaBtn from '../../../../components/Button/MetaBtn';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import DashCard from '../../../../components/DashCard/DashCard';
import dols from '../../../../assets/dollar.png';
import success from '../../../../assets/activity.png';
import rating from '../../../../assets/rating.png';
import project from '../../../../assets/project.png';
import client from '../../../../assets/client.png';
import Deadline from '../../../../components/Deadline/Deadline';
import DashNav from '../../../../components/DashNav/DashNav';
import Search from '../../../../components/Search/Search';
import DashIntro from '../../../../components/DashIntro/DashIntro';
import { useRole } from '../../../../context/RoleContext';

const Dashboard2 = () => {
  //   const navigate = useNavigate();
  const { user } = useRole();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const userAddress = queryParams.get('address');

  return (
    <div className={design.dashboard}>
      <div className={design.dashboard_body}>
        <Sidebar />
        <div className={design.dashboard_main}>
          <DashNav title='HOME' />
          <Search placeholder='Search for freelancers...' path='freelancers' />
          <DashIntro
            title={`Hello ${user.firstName} ${user.lastName} `}
            text=' Welcome to GIGNexus! Your hub for seamless project management and
          collaboration. Explore your ongoing projects, connect with talented
          freelancers, and effortlessly track your project progress and
          payments. We are excited to partner with you in making every project a
          triumph. Lets work together to achieve your goals!'
            btn='New Job'
          />

          <div className={design.dash_cards}>
            <DashCard
              value='Jobs complete'
              title='Jobs'
              number='0'
              icons={success}
              className={design.crd_1}
            />
            <DashCard
              value='Average ratings'
              title='Rating'
              number='0'
              icons={rating}
              className={design.crd_1}
            />
            <DashCard
              value='Ongoing jobs'
              title='Jobs'
              number='0'
              icons={project}
              className={design.crd_1}
            />
            <DashCard
              value='Total clients'
              title='Clients'
              number='0'
              icons={client}
              className={design.crd_1}
            />
          </div>
          <div className={design.dash_lower}>sfvsv</div>
          {/* <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
