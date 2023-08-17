import Sidebar from '../../../../layout/Sidebar/Sidebar';
import design from './profile.module.css';

const Profile = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}></div>
      </div>
    </div>
  );
};

export default Profile;
