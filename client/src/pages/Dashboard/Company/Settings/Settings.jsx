import Sidebar from '../../../../layout/Sidebar/Sidebar';
import design from './settings.module.css';

const Settings = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}></div>
      </div>
    </div>
  );
};

export default Settings;
