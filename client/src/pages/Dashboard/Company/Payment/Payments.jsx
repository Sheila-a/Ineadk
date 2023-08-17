import DashNav from '../../../../components/DashNav/DashNav';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import dols from '../../../../assets/dollar.png';
import design from './payments.module.css';
import DashCard from '../../../../components/DashCard/DashCard';

const Payments = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='PAYMENTS' />
          <div className={design.come_soon}>
            <DashCard
              value='Total earnings'
              title='Gignex'
              number='0'
              icons={dols}
              className={design.crd_1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
