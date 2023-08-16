import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FreelancerSearchDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchFreelancerData = async () => {
      try {
        const response = await fetch('/src/data/freelancers.json'); // Adjust the path as needed

        if (!response.ok) {
          throw new Error(
            `Network response was not ok (HTTP ${response.status})`
          );
        }

        const data = await response.json();
        console.log('All data:', data);
        const selectedFreelancer = data.find(
          (item) => item.id === parseInt(id, 10)
        );
        console.log('Selected freelancer:', selectedFreelancer);

        if (selectedFreelancer) {
          setUserDetails(selectedFreelancer);
        } else {
          console.error('Freelancer not found');
        }
        //   setLoading(false);
      } catch (error) {
        console.error('Error fetching freelancer data:', error);
        //   setLoading(false);
      }
    };

    fetchFreelancerData();
  }, [id]);
  if (!userDetails) {
    return <div>Loading user details...</div>;
  }

  return <div>{userDetails.firstName}</div>;
};

export default FreelancerSearchDetails;
