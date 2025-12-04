import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Divider,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppStore } from '../store/useAppStore';

// Define the navigation structure. Each item can optionally contain
// children for subpages. This structure mirrors the information
// architecture of the Hawthorne Guides.
interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Rules',
    children: [
      { label: 'Server Rules', path: '/server-rules' },
      { label: 'Roles & Hierarchy', path: '/server-roles' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'How to Register', path: '/register' },
    ],
  },
  {
    label: "Player's Guide",
    children: [
      { label: 'Contents', path: '/players-guide' },
      { label: 'About Hawthorne', path: '/about-hawthorne' },
      { label: 'Character Creation', path: '/character-creation' },
      { label: 'Your MAL', path: '/mal' },
      { label: 'Playing Games', path: '/playing-games' },
      { label: 'Downtime', path: '/downtime' },
      { label: 'Appendices', path: '/appendices' },
    ],
  },
  {
    label: 'Field Guide',
    children: [
      { label: 'Contents', path: '/fieldguide' },
      { label: 'Region of Dreams', path: '/fieldguide/region-of-dreams' },
      {
        label: 'Split Tooth Mountain',
        path: '/fieldguide/split-tooth-mountain',
      },
      { label: 'Earth Nodes', path: '/fieldguide/earth-nodes' },
      { label: 'Underwater District', path: '/fieldguide/underwater-district' },
    ],
  },
  {
    label: 'Monsters',
    children: [
      { label: 'Compendium', path: '/monsters' },
      { label: 'Submit a Monster', path: '/monsters/submit' },
      { label: 'Statblock Builder', path: '/monsters/builder' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Important Links', path: '/resources/important-links' },
      { label: 'PDF Guides', path: '/resources/pdf-guides' },
      { label: 'Credits', path: '/resources/credits' },
    ],
  },
  { label: 'FAQ', path: '/faq' },
];

/**
 * Navigation component providing a top AppBar and a side Drawer.
 * It consumes global state from Zustand to manage the drawer
 * visibility and the theme. Navigation links are highlighted based
 * on the current route.
 */
export default function Navigation() {
  const theme = useTheme();
  const location = useLocation();
  const {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    theme: themeMode,
    toggleTheme,
  } = useAppStore();

  // Determine which icon to display for theme toggle
  const ThemeIcon = themeMode === 'light' ? DarkModeIcon : LightModeIcon;

  const renderNavList = (items: NavItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Fragment key={item.label}>
            <ListSubheader>{item.label}</ListSubheader>
            {renderNavList(item.children)}
            <Divider sx={{ mt: 1, mb: 1 }} />
          </Fragment>
        );
      }
      const selected = location.pathname === item.path;
      return (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path ?? '#'}
            selected={selected}
            onClick={() => closeDrawer()}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hawthorne Guild
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            <ThemeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        variant="temporary"
      >
        <Toolbar />
        <List sx={{ width: 260 }}>{renderNavList(navItems)}</List>
      </Drawer>
    </>
  );
}
