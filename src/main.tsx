import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppStore } from './store/useAppStore';
import Layout from './components/Layout';
import PageContent from './components/PageContent';

// Create a QueryClient for React Query
const queryClient = new QueryClient();

// Hook to compute the theme based on the Zustand store. Creating
// this function within the module avoids re‑creating the theme on
// every render of the component using it. Instead, the theme is
// memoized when the mode changes.
function useMuiTheme() {
  const mode = useAppStore((state) => state.theme);
  return React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#633926' : '#caa77c',
          },
          secondary: {
            main: mode === 'light' ? '#a37e2c' : '#dbc190',
          },
        },
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
        },
      }),
    [mode],
  );
}

function AppRouter() {
  const theme = useMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/Guides/">
          <Layout>
            <Routes>
              {/* Catch all routes handled by PageContent; wildcard param collects remainder of path */}
              <Route path="*" element={<PageContent />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<AppRouter />);
}
