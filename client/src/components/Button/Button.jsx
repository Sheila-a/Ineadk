import design from './button.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ style, content, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      style={style}
      className={design.Button}
      onClick={handleClick}
      data-aos='zoom-in'
      data-aos-duration='1000'
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
