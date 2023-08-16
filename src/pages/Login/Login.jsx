import { Link } from 'react-router-dom';
import design from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../../context/RoleContext';
import { useEffect, useState, useRef } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MetaBtn from '../../components/Button/MetaBtn';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const LOGIN_URL = 'https://freelance-h6b1.onrender.com/api/v1/auth/';

const Login = () => {
  const { setUser, role } = useRole();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  // const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [email, password]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedEmail && storedPassword && storedRememberMe) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(storedRememberMe === 'true');
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleConnectMetaMask = async () => {
  //   try {
  //     if (window.ethereum) {
  //       // Prompt the user to connect their wallet using the ethereum.request method
  //       const accounts = await window.ethereum.request({
  //         method: 'eth_requestAccounts',
  //       });

  //       // Check if the user approved the connection
  //       if (accounts.length > 0) {
  //         const userRole = useRole(role);

  //         if (userRole === 'freelancer') {
  //           localStorage.setItem('freelancer_wallet', accounts[0]);
  //           setIsMetaMaskInstalled(true);
  //           navigate('/freelancer/dashboard');
  //         }

  //         // redirectToDashboard('freelancer');
  //         // navigate(`/${role}/dashboard?address=${accounts[0]}`);
  //       } else {
  //         alert('Please connect MetaMask to continue.');
  //       }
  //     } else {
  //       alert('Please install MetaMask to continue.');
  //     }
  //   } catch (error) {
  //     alert('Error connecting to the Ethereum wallet');
  //   }
  // };

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsMetaMaskInstalled(false);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
  }, []);

  const redirectToDashboard = (userRole) => {
    if (userRole === 'freelancer') {
      navigate('/freelancer/dashboard');
    } else if (userRole === 'company') {
      navigate('/company/dashboard');
    } else {
      navigate('/'); // Default dashboard route
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      //console.log(response?.data)
      // console.log(jwtDecode(response?.data?.token));
      if (response.status === 200) {
        const { token } = response.data;
        // console.log('Received Token:', token);

        // Decode the token and log the user details
        const decodedUser = jwtDecode(token);
        // console.log('Decoded User Information:', decodedUser);
        // const { setUser, role } = useRole();
        localStorage.setItem('userDetails', JSON.stringify(decodedUser));
        setUser(decodedUser);

        // ... (rest of the code for successful login)

        // Decode the JWT token to get user details

        // Set the user details in the context

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
          localStorage.setItem('rememberMe', rememberMe);
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
          localStorage.removeItem('rememberMe');
        }

        setEmail('');
        setPassword('');
        setRememberMe(false);
        setSuccess(true);
        setErrorMsg('');
        setTimeout(() => {
          // if (role === 'freelancer') {
          //   navigate('/freelance/dashboard');
          // } else if (role === 'company') {
          //   navigate('/company/dashboard');
          // } else {
          //   // Handle other roles or scenarios
          //   navigate('/'); // Default dashboard route
          // }
          // console.log('User Role:', decodedUser.role);
          redirectToDashboard(decodedUser.role);
        }, 10);
      } else {
        setErrorMsg('Login Failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      if (!error.response) {
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErrorMsg('Unauthorized');
      } else {
        setErrorMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className={design.login}>
      <div className={design.login_container}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <p className={design.welcomeBack}>Welcome back to GIGNexus!</p>
        <p
          ref={errRef}
          className={`${design.errorMsg} ${
            errorMsg ? design.errorMsg : design.offscreen
          }`}
          aria-live='assertive'
        >
          {errorMsg}
        </p>

        {/* {success ? (
          <div className={design.meta_div}>
            <p className={design.first_p}>
              Connect with MetaMask to access your account securely and manage
              your freelance projects effortlessly.
            </p>
            <MetaBtn
              content='Connect with MetaMask'
              style={{ width: '100%', marginBottom: '20px' }}
              onClick={handleConnectMetaMask}
            />
          </div>
        ) : ( */}
        <form onSubmit={handleSubmit} className={design.form}>
          <div>
            <label
              htmlFor='email'
              // className={styles['login-label']}
            >
              Email
            </label>
            <input
              // className={styles['login-input']}
              type='email'
              id='email'
              ref={userRef}
              autoComplete='off'
              placeholder='victor@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              // className={styles['login-label']}
            >
              Password
            </label>
            <div className={design.password_input_container}>
              <input
                // className={styles['login-input']}
                type={showPassword ? 'text' : 'password'}
                placeholder='*********'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />{' '}
              <span
                className={design.password_toggle}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <RemoveRedEyeIcon sx={{ color: '#ff9800' }} />
                ) : (
                  <VisibilityOffIcon sx={{ color: '#ff9800' }} />
                )}
              </span>
            </div>
          </div>{' '}
          <div className={design.login_checkbox}>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span> Remember me</span>
          </div>
          <MetaBtn
            content={
              loading ? (
                <CircularProgress style={{ color: '#fff' }} size={23} />
              ) : (
                'Login  '
              )
            }
            disabled={loading}
            style={{ marginBottom: '20px', marginTop: '20px' }}
          />
        </form>
        {/* )} */}

        <div className={design.login_bottom}>
          <Link to='/'>Go back</Link>
          <p>
            {' '}
            New here? <Link to='/role-selection'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
