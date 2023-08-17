import { useParams } from 'react-router-dom';
import design from './search.module.css';
import { useEffect, useState } from 'react';
import SearchResultsRow from './SearchResultRow';
import Navbar from '../../components/Navbar/Navbar';

const SearchResults = () => {
  const { category, query } = useParams();
  //   const [results, setResults] = useState([]);
  const [freelancerResults, setFreelancerResults] = useState([]);
  const [jobResults, setJobResults] = useState([]);
  const [searchType, setSearchType] = useState('freelancers');

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (searchType === 'freelancers') {
        response = await fetch('/src/data/freelancers.json');
      } else if (searchType === 'jobs') {
        response = await fetch('/src/data/jobs.json');
      }
      const data = await response.json();

      // Filter the data based on the query
      const filteredResults = data.filter((item) =>
        item.role.toLowerCase().includes(query.toLowerCase())
      );

      if (searchType === 'freelancers') {
        setFreelancerResults(filteredResults);
        setJobResults([]); // Clear job results
      } else if (searchType === 'jobs') {
        setJobResults(filteredResults);
        setFreelancerResults([]); // Clear freelancer results
      }
    };

    fetchData();
  }, [searchType, query]);

  return (
    <div>
      <Navbar
      //   onSearchTypeChange={setSearchType}
      />
      <div className={design.Search_results}>
        <h2>
          Search Results for {category}: {query}
        </h2>
        <div>
          {
            // searchType === 'freelancers'
            //     ?
            freelancerResults.map((result) => (
              <SearchResultsRow
                key={result.id}
                img={result.profilePicture}
                name={`${result.firstName} ${result.lastName}`}
                number={result.phoneNumber}
                email={result.email}
                billing={result.Billing}
              />
            ))
            //        {/* : jobResults.map((result) => (
            //         <SearchResultsRow
            //            key={result.id}
            //            companyEmail={result.companyEmail}
            //             companyName={result.companyName}
            //              jobTitle={result.jobTitle}
            //              duration={result.duration}
            //            offering={result.offering}
            //            /> */}
            //  ))
          }
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
