import AddProject from '../../../../components/AddProject/AddProject';
import DashIntro from '../../../../components/DashIntro/DashIntro';
import DashNav from '../../../../components/DashNav/DashNav';
import JobCard from '../../../../components/JobCard/JobCard';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import design from './jobs.module.css';

const Jobs = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='JOBS' />
          <DashIntro
            title='Unlock Your Perfect Freelance Match'
            text='Welcome to the jobs section, your gateway to finding the ideal freelance talent for your projects. Whether you are looking for creative experts, technical wizards, or strategic consultants, this is where you will discover the perfect match to bring your vision to life. Lets start connecting with top-notch freelancers and turning your projects into reality!'
          />
          <div className={design.job_flex}>
            <JobCard />
            <AddProject title={'Jobs'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
