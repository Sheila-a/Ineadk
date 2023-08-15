import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRole } from '../../context/RoleContext';
import design from './signup.module.css';
import MetaBtn from '../../components/Button/MetaBtn';

const CompanySignUp = () => {
  const { role } = useRole();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSignUp = async () => {
    // Perform validation on inputs and API call to register the company
    // ...

    // After successful registration, redirect to the dashboard or another relevant page
    navigate(`/${role}dashboard`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={design.signup}>
      <div className={design.companySignUp}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <div className={design.form}>
          <input
            type='text'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder='Company Name'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <MetaBtn
            content='Sign Up'
            onClick={handleSignUp}
            style={{ marginBottom: '50px' }}
          />
        </div>
        <Link onClick={handleGoBack}>Go back</Link>
      </div>
    </div>
  );
};

export default CompanySignUp;
