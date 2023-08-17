import DashNav from '../../../../components/DashNav/DashNav';
import ProfileCard from '../../../../components/ProfileCard/ProfileCard';
import ProfileContact from '../../../../components/ProfileContact/ProfileContact';
import ProfileData from '../../../../components/ProfileData/ProfileData';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import design from './profile.module.css';
import { useRole } from '../../../../context/RoleContext';

const Profile2 = () => {
  const { user } = useRole();
  const locations = {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    'New York': ['New York City', 'Buffalo', 'Rochester'],
    Texas: ['Houston', 'Austin', 'Dallas'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    Illinois: ['Chicago', 'Springfield', 'Peoria'],
  };

  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const randomState = getRandomItem(Object.keys(locations));
  const randomCity = getRandomItem(locations[randomState]);
  const currentAddress = `${randomCity}, ${randomState}`;
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='PROFILE' />
          <div className={design.Profile_inner}>
            <ProfileCard currentAddress={currentAddress} />
            <ProfileData />
            <ProfileContact currentAddress={currentAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
