import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function CreditsPage() {
  const PAGE_TITLE = 'Credits';
  const PARAGRAPH_TEXT =
    'The Hawthorne Guild Guides were created by a dedicated team of Dungeon Masters, artists and writers. Artwork is used with permission from the original creators. See the official credits page for a full list of contributors.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_TEXT}</Typography>
    </Page>
  );
}
