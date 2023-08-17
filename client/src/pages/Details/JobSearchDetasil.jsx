import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import design from './fsd.module.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Nav from '../../components/Navbar/Nav';
import MetaBtn from '../../components/Button/MetaBtn';

const JobSearchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch('/src/data/jobs.json'); // Adjust the path as needed
        // console.log(response);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (HTTP ${response.status})`
          );
        }

        const data = await response.json();
        // console.log('All data:', data);
        const selectedJob = data.find((item) => item.id === parseInt(id, 10));
        // console.log('Selected freelancer:', selectedFreelancer);

        if (selectedJob) {
          setTimeout(() => {
            setUserDetails(selectedJob);
            setIsLoading(false); // Set loading to false after the data is fetched
          }, 2000);
        } else {
          alert('Job not found');
          setIsLoading(false);
        }
        //   setLoading(false);
      } catch (error) {
        console.error('Error fetching freelancer data:', error);
        setIsLoading(false);
      }
    };

    fetchJobData();
  }, [id]);

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

  const handleGoBack = () => {
    navigate(-1);
  };

  const formattedName = `${userDetails.companyName}`.toLowerCase();

  const months = Math.floor(userDetails.duration / 30);
  const days = userDetails.duration % 30;
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
    <div>
      <Nav />
      <div className={design.FSD_wrap}>
        <div className={design.flexa} onClick={handleGoBack}>
          <ArrowBackOutlinedIcon />
          <span>Go Back</span>
        </div>
        <div className={design.FSD_detail_card}>
          <img
            src={`https://placehold.co/600x400?text=${userDetails.companyName}`}
          />
          <div className={design.FSD_detail_right}>
            <div className={design.FSD_top}>
              <h2>Details</h2>
              <p>
                <span>Name: </span>
                {userDetails.companyName}
              </p>
              <p>
                <span>Email: </span>
                {`${formattedName}@gmail.com`}
              </p>
              <p>
                <span>Job title: </span>
                {userDetails.jobTitle}
              </p>
              <p>
                <span>Cost: </span>${userDetails.prize}
              </p>
              <p>
                <span>Duration: {durationText}</span>
              </p>
            </div>
            <div className={design.FSD_bottom}>
              <h2>Other information</h2>
              <p>
                <span>Github: </span>
                {`github.com/${formattedName}`}
              </p>
              <p>
                <span>LinkedIn: </span>
                {`linkedin.com/in/${formattedName}`}
              </p>
              <p>
                <span>Website/Portfolio: </span>
                {`${formattedName}.netlify.app/`}
              </p>
              <p>
                <span>Twitter: </span>
                {`twitter.com/${formattedName}`}
              </p>
            </div>
            <MetaBtn
              content='Place Bid'
              style={{
                marginTop: '30px',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchDetails;
