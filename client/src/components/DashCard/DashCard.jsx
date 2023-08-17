import PropTypes from 'prop-types';
import design from './dashCard.module.css';

const DashCard = ({ className, icons, value, title, number }) => {
  return (
    <div
      className={className}
      style={{
        borderRadius: '10px',
        display: 'flex',
        alignItem: 'center',
        maxHeight: '150px',
      }}
    >
      <img src={icons} alt='' className={design.DashCard_img} />
      <div className={design.info}>
        <p>{value}</p>
        <h5>{title}</h5>
        <h5>{number}</h5>
      </div>
    </div>
  );
};

DashCard.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string,
  icons: PropTypes.string,
  className: PropTypes.string,
};

export default DashCard;
