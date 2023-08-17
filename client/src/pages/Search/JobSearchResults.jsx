import design from './search.module.css';
import { useEffect, useState } from 'react';
import SearchResultsRow from './SearchResultRow';
import PropTypes from 'prop-types';
import Nav from '../../components/Navbar/Nav';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate, Link } from 'react-router-dom';

const JobSearchResults = ({ searchQuery }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await fetch('/src/data/jobs.json'); // Adjust the path as needed

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const filtered = data.filter((job) =>
          job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filtered) {
          setTimeout(() => {
            setFilteredJobs(filtered);
            setIsLoading(false);
          }, 3000);
        } else {
          console.error('Freelancer not found');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching jobs data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchJobsData();
  }, [searchQuery]);

  if (error) {
    return <div>Error: {error.message}</div>;
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
          Search Results for Jobs: <span>{searchQuery}</span>{' '}
        </h2>
        <div className={design.Search_comps}>
          {filteredJobs.map((result) => {
            const months = Math.floor(result.duration / 30);
            const days = result.duration % 30;
            let durationText = '';
            if (months > 0) {
              durationText += `${months} ${months === 1 ? 'month' : 'months'}`;
              if (days > 0) {
                durationText += ` and `;
              }
            }
            if (days > 0) {
              durationText += `${days} ${days === 1 ? 'day' : 'days'}`;
            }
            return (
              <Link to={`/job-details/${result.id}`} key={result.id}>
                <SearchResultsRow
                  signature='jobs'
                  key={result.id}
                  img={`https://placehold.co/600x400?text=${result.companyName}`}
                  companyName={result.companyName}
                  companyEmail={result.companyEmail}
                  jobTitle={result.jobTitle}
                  duration={durationText}
                  offering={result.prize}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

JobSearchResults.propTypes = {
  searchQuery: PropTypes.string,
};

export default JobSearchResults;
