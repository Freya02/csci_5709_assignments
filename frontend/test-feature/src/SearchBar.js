import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <TextField
      className="search-bar" 
      type="text"
      placeholder="Search by course title"
      onChange={handleChange}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
