import design from './dashboard.module.css';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import DashCard from '../../../../components/DashCard/DashCard';
import dols from '../../../../assets/dollar.png';
import success from '../../../../assets/activity.png';
import rating from '../../../../assets/rating.png';
import project from '../../../../assets/project.png';
import client from '../../../../assets/client.png';
import Deadline from '../../../../components/Deadline/Deadline';
import DashNav from '../../../../components/DashNav/DashNav';
import { useState } from 'react';
import DashIntro from '../../../../components/DashIntro/DashIntro';
import Search from '../../../../components/Search/Search';
import { useRole } from '../../../../context/RoleContext';

const Dashboard = () => {
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
          <Search placeholder='Search for jobs...' path='jobs' />
          <DashIntro
            title={`Hello ${user.firstName} ${user.lastName} `}
            text=' Welcome! Find everything you need to manage your freelance career and
        stay organized. Check out your latest projects, connect with clients,
        and keep track of your earnings all in one place. Were thrilled to have
        you on board. Lets make every gig a success together!'
            btn='New Proposal'
          />
          <div className={design.dash_cards}>
            <DashCard
              value='Total earnings'
              title='USD'
              number='0'
              icons={dols}
              className={design.crd_1}
            />
            <DashCard
              value='Completed projects'
              title='Projects'
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
              value='Ongoing projects'
              title='Projects'
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
          <div className={design.dash_lower}>
            <Deadline />
            sfvsv
          </div>
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

export default Dashboard;
