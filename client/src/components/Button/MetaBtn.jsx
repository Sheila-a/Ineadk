import design from './button.module.css';
import PropTypes from 'prop-types';

const MetaBtn = ({ style, content, onClick }) => {
  return (
    <button
      style={style}
      className={design.Button}
      onClick={onClick}
      data-aos='zoom-in'
      data-aos-duration='1000'
    >
      {content}
    </button>
  );
};

MetaBtn.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default MetaBtn;
