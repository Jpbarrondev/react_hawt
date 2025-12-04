import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchQuery } from '../signals/searchSignal';

/**
 * A simple search bar component that updates a reactive signal. The
 * current query is stored in the `searchQuery` signal. Other
 * components can listen to this signal and react accordingly.
 */
export default function SearchBar() {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder="Search..."
      value={searchQuery.value}
      onChange={(e) => {
        searchQuery.value = e.target.value;
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
