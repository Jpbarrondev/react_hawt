import { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

/**
 * Layout component that wraps the navigation and main content. It adds
 * proper spacing to account for the fixed AppBar and ensures content
 * scrolls beneath it.
 */
export default function Layout({ children }: { children: ReactNode }) {
  // const theme = useTheme(); // currently unused but may be useful for future theming needs
  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* spacer for fixed AppBar */}
        <Toolbar />
        {/* global search bar */}
        <Box sx={{ mb: 2 }}>
          <SearchBar />
        </Box>
        {children}
      </Box>
    </Box>
  );
}
