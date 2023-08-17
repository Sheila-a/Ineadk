import design from './profileData.module.css';
import { useRole } from '../../context/RoleContext';

const ProfileData = () => {
  const { user } = useRole();
  const ProfileDetails = ({ title, description, year }) => {
    return (
      <div className={design.ProfileDetails}>
        <h4>{title}</h4>
        <p>
          <strong>{year}</strong>
        </p>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className={design.ProfileData}>
      <h3>BIODATA</h3>
      <p className={design.ProfileData_p}>
        Hi I'm <b>{`  ${user.firstName} ${user.lastName} `}</b>, has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type. Donec pede justo, fringilla vel, aliquet
        nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
        vitae, eleifend ac, enim.
      </p>
      <ProfileDetails
        title='Lead designer / Developer'
        year='2010-2015'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <ProfileDetails
        title='Senior Graphic Designer'
        year='2007-2009'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
    </div>
  );
};

export default ProfileData;
