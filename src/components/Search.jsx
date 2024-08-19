import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em' />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type='text'
        placeholder='Search by title...'
      />
    </div>
  );
};

Search.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
};

export default Search;