import { useState } from 'react';
import AddProject from '../../../../components/AddProject/AddProject';
import DashIntro from '../../../../components/DashIntro/DashIntro';
import DashNav from '../../../../components/DashNav/DashNav';
import JobCard from '../../../../components/JobCard/JobCard';
import Modal from '../../../../components/Modal/Modal';
import design from './jobs.module.css';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';

const Jobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    console.log('Form data received:', formData);
    // Update the project data state with the new form data
    setProjectData([...projectData, formData]);
    closeModal(); // Close the modal after submitting
  };

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
            <JobCard
              title='Frontend HTML/CSS/JS'
              content='With supporting text below as a natural lead-in to additional content.'
            />{' '}
            {projectData.map((project, index) => (
              <JobCard
                key={index}
                title={project.title}
                content={project.description}
              />
            ))}
            <AddProject title={'Jobs'} onClick={openModal} />{' '}
            {isModalOpen && (
              <Modal onClose={closeModal} onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
