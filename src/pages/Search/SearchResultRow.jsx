// import { useNavigate } from 'react-router-dom';
import design from './search.module.css';
import PropTypes from 'prop-types';

const SearchResultsRow = ({
  name,
  email,
  billing,
  number,
  img,
  onClick,
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
    <div className={design.Search_row} onClick={onClick}>
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
          <>
            <h2>{companyName}</h2>
            <p>{companyEmail}</p>
            <p>{jobTitle}</p>
            <p>{duration}</p>
            <p>${offering}</p>
          </>
        ) : (
          <>
            <h2>No result found</h2>
          </>
        )}
      </div>
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
  img: PropTypes.object,
  role: PropTypes.string,
  companyName: PropTypes.string,
  companyEmail: PropTypes.string,
  jobTitle: PropTypes.string,
  duration: PropTypes.number,
  offering: PropTypes.number,
  onClick: PropTypes.func,
};

export default SearchResultsRow;
