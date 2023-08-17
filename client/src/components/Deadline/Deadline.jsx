import PropTypes from 'prop-types';
import design from './deadline.module.css';
const Deadline = () => {
  function ColorfulPTag({ content }) {
    const isPositive = content.startsWith('M');

    return (
      <p
        style={{ color: isPositive ? '#039855' : '#D92D20', fontWeight: '600' }}
      >
        {content}
      </p>
    );
  }
  ColorfulPTag.propTypes = {
    content: PropTypes.string.isRequired,
  };
  return (
    <div className={design.Deadline}>
      <h4>Project Deadlines</h4>

      <div className={design.Deadline_details}>
        <p>20th Aug</p>
        <p>Landing page</p>
        <ColorfulPTag content='Less than 30' />
      </div>
      <div className={design.Deadline_details}>
        <p>3rd Sep</p>
        <p>E-commerce site</p>
        <ColorfulPTag content='More time' />
      </div>
      <div className={design.Deadline_details}>
        <p>20th Aug</p>
        <p>Landing page</p>
        <ColorfulPTag content='Less than 30' />
      </div>
      <div className={design.Deadline_details}>
        <p>3rd Sep</p>
        <p>E-commerce site</p>
        <ColorfulPTag content='More time' />
      </div>
      <div className={design.Deadline_details}>
        <p>20th Aug</p>
        <p>Landing page</p>
        <ColorfulPTag content='Less than 30' />
      </div>
      <div className={design.Deadline_details}>
        <p>3rd Sep</p>
        <p>E-commerce site</p>
        <ColorfulPTag content='More time' />
      </div>
      <div className={design.Deadline_details}>
        <p>20th Aug</p>
        <p>Landing page</p>
        <ColorfulPTag content='Less than 30' />
      </div>
      <div className={design.Deadline_details}>
        <p>3rd Sep</p>
        <p>E-commerce site</p>
        <ColorfulPTag content='More time' />
      </div>
      <div className={design.Deadline_details}>
        <p>20th Aug</p>
        <p>Landing page</p>
        <ColorfulPTag content='Less than 30' />
      </div>
      <div className={design.Deadline_details}>
        <p>3rd Sep</p>
        <p>E-commerce site</p>
        <ColorfulPTag content='More time' />
      </div>
    </div>
  );
};

export default Deadline;
