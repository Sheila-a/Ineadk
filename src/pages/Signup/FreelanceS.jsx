import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useRole } from '../../context/RoleContext';
import { Link, useNavigate } from 'react-router-dom';
import design from './signup.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import MetaBtn from '../../components/Button/MetaBtn';

const USERNAME_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNUP_URL = 'https://freelance-h6b1.onrender.com/api/v1/users/';

const FreelancerSignUp = () => {
  const { role } = useRole();
  const [selectedRole, setSelectedRole] = useState(role);

  console.log('Role in FreelancerSignUp:', selectedRole);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // const [userName, setUserName] = useState('');
  // const [validUserName, setValidUserName] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(USERNAME_REGEX.test(firstName));
  }, [firstName]);

  // useEffect(() => {
  //   setValidUserName(USERNAME_REGEX.test(userName));
  // }, [userName]);

  useEffect(() => {
    setValidLastName(USERNAME_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMessage('');
  }, [firstName, lastName, email, password]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(firstName);
    const v2 = USERNAME_REGEX.test(lastName);
    const v3 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMessage('Invalid Entry');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role: selectedRole,
          // userName,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const apiResponse = response?.data;
      console.log(apiResponse);
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setPassword('');
      setEmail('');
    } catch (err) {
      if (!err?.response) {
        setErrMessage('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMessage('Username or Email Taken');
      } else {
        setErrMessage('Registration Failed');
        console.log(err);
      }
      errRef.current.focus();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate('/login'); // Redirect to login page on success
    }
  }, [success, navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={design.signup}>
      <div className={design.freelancerSignUp}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <p
          ref={errRef}
          className={errMessage ? design.errmsg : design.offscreen}
          aria-live='assertive'
        >
          {errMessage}
        </p>
        <form onSubmit={handleSignUp} className={design.form}>
          <div className={design.flexa}>
            <div>
              <label className={design['input-label']} htmlFor='firstName'>
                First name
                <CheckIcon
                  className={validFirstName ? design.valid : design.hide}
                />
                <CloseOutlinedIcon
                  className={
                    validFirstName || !firstName ? design.hide : design.invalid
                  }
                />
              </label>
              <input
                type='text'
                id='firstName'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-invalid={validFirstName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                value={firstName}
                placeholder=' Enter firstname  '
              />
            </div>
            <div>
              {' '}
              <label className={design.input_label} htmlFor='lastName'>
                Lastname
                <CheckIcon
                  className={validLastName ? design.valid : design.hide}
                />
                <CloseOutlinedIcon
                  className={
                    validLastName || !lastName ? design.hide : design.invalid
                  }
                />
              </label>
              <input
                type='text'
                id='lastName'
                value={lastName}
                autoComplete='off'
                onChange={(e) => setLastName(e.target.value)}
                required
                aria-invalid={validLastName ? 'false' : 'true'}
                aria-describedby='mailnote'
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                placeholder='Enter lastname  '
              />
            </div>
          </div>
          <p
            id='uidnote'
            className={
              (firstNameFocus || lastNameFocus) &&
              (firstName || lastName) &&
              (!validFirstName || !validLastName)
                ? design.instructions
                : design.offscreen
            }
          >
            <InfoIcon />4 to 24 characters. Must begin with a letter.
          </p>
          {/* <>
            <label className={design.input_label} htmlFor='username'>
              Username
              <CheckIcon
                className={validUserName ? design.valid : design.hide}
              />
              <CloseOutlinedIcon
                className={
                  validUserName || !lastName ? design.hide : design.invalid
                }
              />
            </label>
            <input
              type='text'
              id='username'
              autoComplete='off'
              onChange={(e) => setUserName(e.target.value)}
              required
              aria-invalid={validLastName ? 'false' : 'true'}
              aria-describedby='uidnote'
              value={userName}
              placeholder='Enter username'
            />
          </> */}
          <>
            <label className={design.input_label} htmlFor='email'>
              Email
              <CheckIcon className={validEmail ? design.valid : design.hide} />
              <CloseOutlinedIcon
                className={validEmail || !email ? design.hide : design.invalid}
              />
            </label>
            <input
              type='text'
              id='email'
              value={email}
              autoComplete='off'
              required
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby='mailnote'
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </>
          <p
            id='uidnote'
            className={
              emailFocus && !validEmail
                ? design.instructions2
                : design.offscreen
            }
          >
            <InfoIcon /> Please Make use of a Valid Email address.
          </p>
          <>
            <label className={design.input_label} htmlFor='password'>
              Password
              <CheckIcon
                className={validPassword ? design.valid : design.hide}
              />
              <CloseOutlinedIcon
                className={
                  validPassword || !password ? design.hide : design.invalid
                }
              />
            </label>
            <input
              type='password'
              id='password'
              value={password}
              autoComplete='off'
              required
              aria-invalid={validPassword ? 'false' : 'true'}
              aria-describedby='mailnote'
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
            />
          </>
          <p
            id='pwdnote'
            className={
              passwordFocus && !validPassword
                ? design.instructions
                : design.offscreen
            }
          >
            <InfoIcon />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:
            <span aria-label='exclamation mark'>!</span>
            <span aria-label='at symbol'>@</span>
            <span aria-label='hashtag'>#</span>
            <span aria-label='dollar sign'>$</span>
            <span aria-label='percent'>%</span>
          </p>
          <MetaBtn
            content={
              loading ? (
                <CircularProgress style={{ color: '#fff' }} size={23} />
              ) : (
                'Create account'
              )
            }
            disabled={loading}
            style={{ marginBottom: '20px', marginTop: '20px' }}
          />
        </form>
        <Link onClick={handleGoBack}>Go back</Link>
      </div>
    </div>
  );
};

export default FreelancerSignUp;
