// import { useNavigate } from 'react-router-dom';
import design from './search.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchResultsRow = ({
  id,
  name,
  email,
  billing,
  number,
  img,
  role,
  companyName,
  companyEmail,
  jobTitle,
  duration,
  offering,
  signature,
  rating,
}) => {
  return (
    <div className={design.Search_row}>
      {/* <Link to={`/user-details/${id}`}> */}
      <div>
        {signature === 'freelance' ? (
          <div className={design.FreeRow}>
            <img src={img} />
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{role}</p>
              <p>{number}</p>
              <p>{rating}</p>
              <p>${billing}</p>
            </div>
          </div>
        ) : signature === 'jobs' ? (
          <div className={design.FreeRow}>
            <img src={img} />
            <div>
              <h2>{companyName}</h2>
              <p>{companyEmail}</p>
              <p>{jobTitle}</p>
              <p>{duration}</p>
              <p>${offering}</p>
            </div>
          </div>
        ) : (
          <>
            <h2>No result found</h2>
          </>
        )}
      </div>
      {/* </Link> */}
    </div>
  );
};

SearchResultsRow.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  signature: PropTypes.string,
  email: PropTypes.string,
  billing: PropTypes.number,
  number: PropTypes.object,
  img: PropTypes.string,
  role: PropTypes.string,
  companyName: PropTypes.string,
  companyEmail: PropTypes.string,
  jobTitle: PropTypes.string,
  duration: PropTypes.number,
  offering: PropTypes.number,
};

export default SearchResultsRow;
