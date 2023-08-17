import design from './jobCard.module.css';
import MetaBtn from '../Button/MetaBtn';

const JobCard = ({ title, content }) => {
  return (
    <div className={design.ProjectCard}>
      {/* <div className={design.banner}></div> */}
      <div className={design.ProjectCard_inner}>
        <h3>{title} </h3>
        <p>{content}</p>
        <MetaBtn content='See more' style={{ padding: '5px 12px' }} />
      </div>
    </div>
  );
};

export default JobCard;
