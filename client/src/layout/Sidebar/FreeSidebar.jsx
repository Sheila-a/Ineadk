import design from './sidebar.module.css';
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidebar = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  const [activeItem, setActiveItem] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPermanent, setIsPermanent] = useState(false);
  const location = useLocation();

  //Logout Functionality
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  // sidebar expansion
  const toggleSidebar = () => {
    if (window.innerWidth <= 700) {
      setIsPermanent(true);
      return;
    }
    setIsExpanded(!isExpanded);
  };

  // Listen for window resize events to update isExpanded and isPermanent  states when the width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setIsExpanded(false); // Always set isExpanded to false if width is 700px or lower
        setIsPermanent(true); // Set isPermanent  to true when the width is 700px or lower
      } else {
        setIsPermanent(false); // Set isPermanent to false when the width is larger than 700px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // update activeItem based on current location
  useEffect(() => {
    if (location.pathname === '/freelancer/dashboard') {
      setActiveItem('dashboard');
    } else if (location.pathname === '/projects') {
      setActiveItem('projects');
    } else if (location.pathname === '/freelancer/message') {
      setActiveItem('message');
    } else if (location.pathname === '/freelancer/profile') {
      setActiveItem('profile');
    } else if (location.pathname === '/freelancer/support') {
      setActiveItem('support');
    } else if (location.pathname === '/earnings') {
      setActiveItem('earnings');
    } else if (location.pathname === '/freelancer/settings') {
      setActiveItem('settings');
    }
  }, [location]);

  // define active and inactive colors
  const activeBackgroundColor = '#671ae4';
  const activeBackgroundColor2 = '#501bb4';

  // set style for active link
  const activeLinkStyle = {
    backgroundColor: activeBackgroundColor,
    textDecoration: 'none',
    color: '#fff',
    transition: '.5s ease',
  };

  const activeLinkStyle2 = {
    backgroundColor: activeBackgroundColor2,
    textDecoration: 'none',
    color: '#fff',
    transition: '.5s ease',
  };

  const isMobileView = window.innerWidth <= 450;

  return (
    <div
      className={`${design.Sidebar_wrapper} ${
        isExpanded ? '' : design.shrunk
      } ${isPermanent && 'permanent '}`}
    >
      {' '}
      {isExpanded ? (
        <MenuOpenOutlinedIcon
          style={{ fontSize: '40px', cursor: 'pointer', marginBottom: '0px' }}
          onClick={toggleSidebar}
        />
      ) : (
        <div className={design.close}>
          {' '}
          <MenuOutlinedIcon
            style={{
              fontSize: '40px',
            }}
            onClick={toggleSidebar}
          />
        </div>
      )}
      {/* {isExpanded && ( */}
      <>
        {isExpanded && (
          <h1 className={design.SideLogo} onClick={reloadPage}>
            GIG<span>Nexus</span>
          </h1>
        )}

        {/* Icons for toggling sidebar */}

        <div className={design.menuItems}>
          {' '}
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/freelancer/dashboard'
              style={activeItem === 'dashboard' ? activeLinkStyle : {}}
            >
              {' '}
              <div className={design.Sidebar_tabs_inner}>
                <HomeWorkOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />

                {isExpanded && <h3>Home</h3>}
              </div>
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/projects'
              style={activeItem === 'projects' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                {/* <img src={Profile} /> */}
                <AccountTreeOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Projects</h3>}
              </div>
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/freelancer/message'
              style={activeItem === 'message' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <ChatOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Messages</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/freelancer/profile'
              style={activeItem === 'profile' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <AccountCircleOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Profile</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/freelancer/support'
              style={activeItem === 'support' ? activeLinkStyle2 : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <ContactSupportOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Support</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/earnings'
              style={activeItem === 'earnings' ? activeLinkStyle2 : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <MonetizationOnOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Earnings</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/freelancer/settings'
              style={activeItem === 'settings' ? activeLinkStyle2 : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <SettingsSuggestOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Settings</h3>}
              </div>
            </Link>
          </div>
          <div className={design.Sidebar_tabs} onClick={handleLogout}>
            <LogoutOutlinedIcon
              style={{ fontSize: isMobileView ? '40px' : '24px' }}
            />
            {isExpanded && <h3>Log out</h3>}
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Sidebar;
