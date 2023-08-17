import { Link, useNavigate } from 'react-router-dom';
import MetaBtn from '../../components/Button/MetaBtn';
import { useRole } from '../../context/RoleContext';
import design from './signup.module.css';

const RoleSelection = () => {
  const navigate = useNavigate();
  const { setRole } = useRole();

  const handleRoleSelection = (role) => {
    console.log('Selected Role:', role);
    setRole(role);
    if (role === 'freelancer') {
      navigate('/signup/freelancer');
    } else if (role === 'company') {
      navigate('/signup/company');
    }
  };

  return (
    <div className={design.signup}>
      <div className={design.roleSelection}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <p>Are you a freelancer or a company?</p>
        <div className={design.btn_bottom}>
          <MetaBtn
            content='Freelancer'
            onClick={() => handleRoleSelection('freelancer')}
            style={{ width: '100%' }}
          />
          <MetaBtn
            content='Company'
            onClick={() => handleRoleSelection('company')}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <Link to='/'>Go back</Link>
          <Link to='/login'> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
