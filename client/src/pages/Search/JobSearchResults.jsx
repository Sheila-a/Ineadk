import design from './search.module.css';
import { useEffect, useState } from 'react';
import SearchResultsRow from './SearchResultRow';
import Nav from '../../components/Navbar/Nav';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';

const JobSearchResults = ({ searchQuery }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

        setFilteredJobs(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchJobsData();
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
          Search Results for Jobs: <span>{searchQuery}</span>{' '}
        </h2>
        <div>
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
              <SearchResultsRow
                signature='jobs'
                key={result.id}
                companyName={result.companyName}
                companyEmail={result.companyEmail}
                jobTitle={result.jobTitle}
                duration={durationText}
                offering={result.prize}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobSearchResults;
