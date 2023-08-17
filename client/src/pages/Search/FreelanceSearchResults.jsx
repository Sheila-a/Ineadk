import design from './search.module.css';
import { useEffect, useState } from 'react';
import SearchResultsRow from './SearchResultRow';
import Nav from '../../components/Navbar/Nav';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const FreelanceSearchResults = ({ searchQuery }) => {
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

        setFilteredFreelancers(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching freelancer data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchFreelancerData();
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return console.log(error.message);
  }

  const handleGoBack = () => {
    navigate(-1);
  };
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
        <div>
          {filteredFreelancers.map((result) => (
            <SearchResultsRow
              signature='freelance'
              id={result.id}
              key={result.id}
              img={result.profilePicture}
              rating={result.totalRating}
              name={result.firstName + ' ' + result.lastName}
              email={result.email}
              role={result.role}
              number={result.duration}
              billing={result.Billing}
            />
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
