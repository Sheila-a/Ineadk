import DashCard from '../../../../components/DashCard/DashCard';
import DashNav from '../../../../components/DashNav/DashNav';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import dols from '../../../../assets/dollar.png';
import design from './earnings.module.css';

const Earnings = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='EARNINGS' />
          <div className={design.come_soon}>
            <DashCard
              value='Total earnings'
              title='Gignex'
              number='0'
              icons={dols}
              className={design.crd_1}
            />
            {/* <h1>COMING SOON</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
