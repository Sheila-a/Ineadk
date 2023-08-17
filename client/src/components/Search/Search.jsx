import { useNavigate } from 'react-router-dom';
import design from './search.module.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';

const Search = ({ page, placeholder, path }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    // navigate(`/${page}/search?query=${searchTerm}`);
    navigate(`/search/${path}?query=${searchTerm}`);
  };

  return (
    <div className={design.SearchBar}>
      <div className={design.icon}>
        <SearchRoundedIcon sx={{ color: '#fff' }} />
      </div>{' '}
      <input
        type='text'
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
        className={design.input}
      />
      {/* <div className={design.dropdownContainer}>
              <select
                value={searchType}
                onChange={handleSearchTypeChange}
                className={design.dropdown}
              >
                <option value='companies'> Companies</option>
                <option value='freelancers'> Freelancers</option>
                <option value='jobs'> Jobs</option>
              </select>
            </div> */}
    </div>
  );
};

export default Search;
