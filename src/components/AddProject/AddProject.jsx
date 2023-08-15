import design from './addProject.module.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddProject = ({ onClick }) => {
  return (
    <div className={design.AddProject} onClick={onClick}>
      <AddOutlinedIcon sx={{ fontSize: '70px' }} />
      <p>Add Project</p>
    </div>
  );
};

export default AddProject;
