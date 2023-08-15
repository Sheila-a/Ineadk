import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import design from './support.module.css';

const Support = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}></div>
      </div>
    </div>
  );
};

export default Support;
