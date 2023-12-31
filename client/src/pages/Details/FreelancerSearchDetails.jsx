import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import design from './fsd.module.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Nav from '../../components/Navbar/Nav';

const FreelancerSearchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFreelancerData = async () => {
      try {
        const response = await fetch('/src/data/freelancers.json');
        // console.log(response);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (HTTP ${response.status})`
          );
        }

        const data = await response.json();
        // console.log('All data:', data);
        const selectedFreelancer = data.find(
          (item) => item.id === parseInt(id, 10)
        );
        // console.log('Selected freelancer:', selectedFreelancer);

        if (selectedFreelancer) {
          setTimeout(() => {
            setUserDetails(selectedFreelancer);
            setIsLoading(false); // Set loading to false after the data is fetched
          }, 2000);
        } else {
          alert('Freelancer not found');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching freelancer data:', error);
        setIsLoading(false);
      }
    };

    fetchFreelancerData();
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

  return (
    <div>
      <Nav />
      <div className={design.FSD_wrap}>
        <div className={design.flexa} onClick={handleGoBack}>
          <ArrowBackOutlinedIcon />
          <span>Go Back</span>
        </div>
        <div className={design.FSD_detail_card}>
          <img src={userDetails.profilePicture} />
          <div className={design.FSD_detail_right}>
            <div className={design.FSD_top}>
              <h2>Details</h2>
              <p>
                <span>Name: </span>
                {userDetails.firstName} {''}
                {userDetails.lastName}
              </p>
              <p>
                <span>Email: </span>
                {userDetails.email}
              </p>
              <p>
                <span>Job title: </span>
                {userDetails.role}
              </p>
              <p>
                <span>Phone Number: </span>
                {userDetails.phoneNumber}
              </p>
              <p>
                <span>Total rating: </span>
                {userDetails.totalRating}
              </p>
              <p>
                <span>Billing rate: </span>${userDetails.Billing}
              </p>
            </div>
            <div className={design.FSD_bottom}>
              <h2>Other information</h2>
              <p>
                <span>Github: </span>
                {`github.com/${userDetails.firstName}${userDetails.lastName}`}
              </p>
              <p>
                <span>LinkedIn: </span>
                {`linkedin.com/in/${userDetails.firstName}${userDetails.lastName}`}
              </p>
              <p>
                <span>Website/Portfolio: </span>
                {`${userDetails.firstName}${userDetails.lastName}.netlify.app/`}
              </p>
              <p>
                <span>Twitter: </span>
                {`twitter.com/${userDetails.firstName}${userDetails.lastName}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSearchDetails;
