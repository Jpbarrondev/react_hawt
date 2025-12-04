import type { ComponentType } from 'react';

// Import all individual page components. Each page encapsulates
// its own JSX content and wraps it inside the reusable Page
// component defined in src/components/Page.tsx.
import IndexPage from '../pages/IndexPage';
import ServerRulesPage from '../pages/ServerRulesPage';
import ServerRolesPage from '../pages/ServerRolesPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import RegisterPage from '../pages/RegisterPage';
import PlayersGuidePage from '../pages/PlayersGuidePage';
import AboutHawthornePage from '../pages/AboutHawthornePage';
import CharacterCreationPage from '../pages/CharacterCreationPage';
import MalPage from '../pages/MalPage';
import PlayingGamesPage from '../pages/PlayingGamesPage';
import DowntimePage from '../pages/DowntimePage';
import AppendicesPage from '../pages/AppendicesPage';
import FieldGuidePage from '../pages/FieldGuidePage';
import RegionOfDreamsPage from '../pages/RegionOfDreamsPage';
import SplitToothMountainPage from '../pages/SplitToothMountainPage';
import EarthNodesPage from '../pages/EarthNodesPage';
import UnderwaterDistrictPage from '../pages/UnderwaterDistrictPage';
import MonstersPage from '../pages/MonstersPage';
import SubmitMonsterPage from '../pages/SubmitMonsterPage';
import StatblockBuilderPage from '../pages/StatblockBuilderPage';
import ImportantLinksPage from '../pages/ImportantLinksPage';
import PdfGuidesPage from '../pages/PdfGuidesPage';
import CreditsPage from '../pages/CreditsPage';
import FaqPage from '../pages/FaqPage';

/**
 * Page interface defines the routing configuration for the
 * application. Each page is associated with a slug (for internal
 * referencing), a URL path, a title used for the navigation and
 * metadata, and a React component that renders the page content.
 */
export interface Page {
  slug: string;
  /**
   * The URL path associated with this page. Used by React Router
   * to match the current location.
   */
  path: string;
  /**
   * Human‑readable title for the page. This appears in the
   * navigation and as the document title.
   */
  title: string;
  /**
   * The React component that renders this page’s content. Named
   * `content` instead of `component` to avoid confusion with the
   * `Page` layout component used throughout the app. Each entry
   * should import a corresponding component from src/pages.
   */
  content: ComponentType;
}

export const pages: Page[] = [
  {
    slug: 'index',
    path: '/',
    title: 'Hawthorne Guild',
    content: IndexPage,
  },
  {
    slug: 'server-rules',
    path: '/server-rules',
    title: 'Server Rules',
    content: ServerRulesPage,
  },
  {
    slug: 'server-roles',
    path: '/server-roles',
    title: 'Server Roles & Hierarchy',
    content: ServerRolesPage,
  },
  {
    slug: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy',
    content: PrivacyPolicyPage,
  },
  {
    slug: 'register',
    path: '/register',
    title: 'How to Register',
    content: RegisterPage,
  },
  {
    slug: 'players-guide',
    path: '/players-guide',
    title: "Player's Guide",
    content: PlayersGuidePage,
  },
  {
    slug: 'about-hawthorne',
    path: '/about-hawthorne',
    title: 'About Hawthorne',
    content: AboutHawthornePage,
  },
  {
    slug: 'character-creation',
    path: '/character-creation',
    title: 'Character Creation',
    content: CharacterCreationPage,
  },
  {
    slug: 'mal',
    path: '/mal',
    title: "Your MAL (Master Adventurer's Log)",
    content: MalPage,
  },
  {
    slug: 'playing-games',
    path: '/playing-games',
    title: 'Playing Games',
    content: PlayingGamesPage,
  },
  {
    slug: 'downtime',
    path: '/downtime',
    title: 'Downtime',
    content: DowntimePage,
  },
  {
    slug: 'appendices',
    path: '/appendices',
    title: 'Appendices',
    content: AppendicesPage,
  },
  {
    slug: 'fieldguide',
    path: '/fieldguide',
    title: 'Field Guide',
    content: FieldGuidePage,
  },
  {
    slug: 'region-of-dreams',
    path: '/fieldguide/region-of-dreams',
    title: 'Region of Dreams',
    content: RegionOfDreamsPage,
  },
  {
    slug: 'split-tooth-mountain',
    path: '/fieldguide/split-tooth-mountain',
    title: 'Split Tooth Mountain',
    content: SplitToothMountainPage,
  },
  {
    slug: 'earth-nodes',
    path: '/fieldguide/earth-nodes',
    title: 'Earth Nodes',
    content: EarthNodesPage,
  },
  {
    slug: 'underwater-district',
    path: '/fieldguide/underwater-district',
    title: 'Underwater District',
    content: UnderwaterDistrictPage,
  },
  {
    slug: 'monsters',
    path: '/monsters',
    title: 'Monster Compendium',
    content: MonstersPage,
  },
  {
    slug: 'submit-monster',
    path: '/monsters/submit',
    title: 'Submit a Monster',
    content: SubmitMonsterPage,
  },
  {
    slug: 'statblock-builder',
    path: '/monsters/builder',
    title: 'Statblock Builder',
    content: StatblockBuilderPage,
  },
  {
    slug: 'important-links',
    path: '/resources/important-links',
    title: 'Important Links',
    content: ImportantLinksPage,
  },
  {
    slug: 'pdf-guides',
    path: '/resources/pdf-guides',
    title: 'PDF Guides',
    content: PdfGuidesPage,
  },
  {
    slug: 'credits',
    path: '/resources/credits',
    title: 'Credits',
    content: CreditsPage,
  },
  {
    slug: 'faq',
    path: '/faq',
    title: 'Frequently Asked Questions',
    content: FaqPage,
  },
];

/**
 * Retrieve a page by its slug. Returns undefined if no match is found.
 * @param slug The page slug
 */
export function getPageBySlug(slug: string): Page | undefined {
  return pages.find((page) => page.slug === slug);
}
