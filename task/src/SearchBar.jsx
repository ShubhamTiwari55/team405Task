import TextField from '@mui/material/TextField';

const SearchBar = ({ handleSearch }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      onChange={(e) => handleSearch(e.target.value)}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;
