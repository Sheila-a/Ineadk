import design from './profileCard.module.css';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useRole } from '../../context/RoleContext';
import PropTypes from 'prop-types';

const ProfileCard = ({ currentAddress }) => {
  const { user } = useRole();

  const isSmallView = window.innerWidth <= 725;
  return (
    <div className={design.ProfileCard}>
      <img src={user.avatarUrl} />
      <div>
        {' '}
        {/* {storedUser ? (
          <p>
            Hello, {storedUser.name} ({storedUser.role})!
          </p>
        ) : (
          <p>Loading user details...</p>
        )} */}
        <h2>{`  ${user.firstName} ${user.lastName} `}</h2>
        <div className={design.ProfileCard_upper}>
          <div className={design.ProfileCard_upper_inner}>
            <WorkOutlineOutlinedIcon
              style={{ fontSize: '16px', marginRight: '7px' }}
            />
            <p>Ui/Ux Developer</p>
          </div>
          <div className={design.ProfileCard_upper_inner}>
            <LocationOnOutlinedIcon
              style={{
                fontSize: '16px',
                marginRight: '5px',
                marginLeft: isSmallView ? '10px' : '0',
              }}
            />
            <p> {currentAddress}</p>
          </div>
        </div>
        <div>
          <div className={design.ProfileCard_lower_inner}>
            <LocalPhoneOutlinedIcon style={{ marginRight: '7px' }} />{' '}
            <p>
              <span>Phone:</span>+235-903-875-7654
            </p>
          </div>
          <div className={design.ProfileCard_lower_inner}>
            <MailOutlinedIcon style={{ marginRight: '7px' }} />
            <p>
              <span>Email:</span>
              {user.email}
            </p>
          </div>
          <div className={design.ProfileCard_lower_inner}>
            <LanguageOutlinedIcon style={{ marginRight: '7px' }} />
            <p>
              <span>Website:</span>
              {`${user.firstName}${user.lastName}`}.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  currentAddress: PropTypes.object,
};
export default ProfileCard;
