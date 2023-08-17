import design from './search.module.css';
import { useEffect, useState } from 'react';
import SearchResultsRow from './SearchResultRow';
import Nav from '../../components/Navbar/Nav';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const FreelanceSearchResults = ({ searchQuery }) => {
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFreelancerData = async () => {
      try {
        const response = await fetch('/src/data/freelancers.json'); // Adjust the path as needed

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log(data);

        const filtered = data.filter((job) =>
          job.role.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filtered) {
          setTimeout(() => {
            setFilteredFreelancers(filtered);
            setIsLoading(false);
          }, 3000);
        } else {
          console.error('Freelancer not found');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching freelancer data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchFreelancerData();
  }, [searchQuery]);

  if (error) {
    return console.log(error.message);
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div>
        <Nav />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress sx={{ color: '#ff9800' }} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className={design.Search_results}>
        <div className={design.flexa} onClick={handleGoBack}>
          <ArrowBackOutlinedIcon />
          <span>Go Back</span>
        </div>
        <h2>
          Search Results for Freelancers: <span>{searchQuery}</span>{' '}
        </h2>
        <div className={design.Search_comps}>
          {filteredFreelancers.map((result) => (
            <Link to={`/usfreelancerer-details/${result.id}`} key={result.id}>
              <SearchResultsRow
                signature='freelance'
                id={result.id}
                img={result.profilePicture}
                rating={result.totalRating}
                name={result.firstName + ' ' + result.lastName}
                email={result.email}
                role={result.role}
                number={result.duration}
                billing={result.Billing}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

FreelanceSearchResults.propTypes = {
  searchQuery: PropTypes.string,
};

export default FreelanceSearchResults;
