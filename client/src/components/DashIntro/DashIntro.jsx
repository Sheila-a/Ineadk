import MetaBtn from '../Button/MetaBtn';
import design from './dashIntro.module.css';

const DashIntro = ({ title, text, btn, onClick }) => {
  return (
    <div className={design.dash_intro}>
      <h3>{title}</h3>
      <p>{text}</p>
      {btn && <MetaBtn content={btn} onClick={onClick} />}
    </div>
  );
};

export default DashIntro;
