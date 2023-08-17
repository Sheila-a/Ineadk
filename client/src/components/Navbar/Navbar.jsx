import { useState } from 'react';
import design from './navbar.module.css';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRole } from '../../context/RoleContext';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar = () => {
  const { user } = useRole();
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      // onSearchTypeChange(searchType);
      navigate(
        `/search_results/${searchType}/${encodeURIComponent(searchQuery)}`
      );
    }
  };
  return (
    <div className={design.navbar}>
      <div className={design.Nav_container}>
        <Link to='/'>
          <h1>
            GIG<span>Nexus</span>
          </h1>
        </Link>

        <div>
          <div className={design.Nav_inner_container}>
            <div className={design.SearchBar}>
              <div className={design.icon}>
                <SearchRoundedIcon sx={{ color: '#fff' }} />
              </div>{' '}
              <input
                type='text'
                placeholder='Manager, frontend, backend'
                // value={searchQuery}
                onChange={handleSearchQueryChange}
                className={design.input}
              />
              <div className={design.dropdownContainer}>
                <select
                  value={searchType}
                  onChange={handleSearchTypeChange}
                  className={design.dropdown}
                >
                  <option value='companies'> Companies</option>
                  <option value='freelancers'> Freelancers</option>
                  <option value='jobs'> Jobs</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={design.BT}>
          {user ? ( // Check if user is signed in
            <>
              <h3>Hi, {user.firstName}</h3>
              <img src={user.avatarUrl} alt={user.name} />
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Button content='Signup' route='/role-selection' />
            </>
          )}
          {/* <Link to='/login'>Login</Link>
            <Button content='Signup' route='/role-selection' /> */}
        </div>
      </div>
      <div className={design.Nav_inner_container2}>
        <div className={design.SearchBar}>
          <div className={design.icon}>
            <SearchRoundedIcon sx={{ color: '#fff' }} />
          </div>{' '}
          <input
            type='text'
            placeholder='manager, frontend, backend'
            // value={searchQuery}
            onChange={handleSearchQueryChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            className={design.input}
          />
          <div className={design.dropdownContainer}>
            <select
              value={searchType}
              onChange={handleSearchTypeChange}
              className={design.dropdown}
            >
              <option value='companies'> Companies</option>
              <option value='freelancers'> Freelancers</option>
              <option value='jobs'> Jobs</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
