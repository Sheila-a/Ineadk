import { useState } from 'react';
import AddProject from '../../../../components/AddProject/AddProject';
import DashIntro from '../../../../components/DashIntro/DashIntro';
import DashNav from '../../../../components/DashNav/DashNav';
import ProjectCard from '../../../../components/ProjectCard/ProjectCard';
import Search from '../../../../components/Search/Search';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import design from './project.module.css';
import Modal from '../../../../components/Modal/Modal';

const Project = () => {
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
          <DashNav title='PROJECT' />
          <Search page='projects' />
          <DashIntro
            title='Streamline Your Project Management'
            text='Welcome to the project management hub. From planning to execution, this is where you can efficiently oversee, coordinate, and optimize all of your projects. Stay organized, collaborate effectively, and drive success across your endeavors. Lets dive in and take control of your projects!'
          />
          <div className={design.project_flex}>
            <ProjectCard
              title='Frontend HTML/CSS/JS'
              content='With supporting text below as a natural lead-in to additional content.'
            />
            <ProjectCard
              title='Frontend HTML/CSS/JS'
              content='With supporting text below as a natural lead-in to additional content.'
            />
            <ProjectCard
              title='Frontend HTML/CSS/JS'
              content='With supporting text below as a natural lead-in to additional content.'
            />
            <ProjectCard
              title='Frontend HTML/CSS/JS'
              content='With supporting text below as a natural lead-in to additional content.'
            />
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                content={project.description}
              />
            ))}
            <AddProject onClick={openModal} title={'Projects'} />
            {isModalOpen && (
              <Modal onClose={closeModal} onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
