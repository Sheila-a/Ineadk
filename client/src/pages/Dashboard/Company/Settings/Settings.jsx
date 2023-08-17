import DashNav from '../../../../components/DashNav/DashNav';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import design from './settings.module.css';

const Settings2 = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='SETTINGS' />
          <div className={design.come_soon}>
            <h1>COMING SOON</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings2;
