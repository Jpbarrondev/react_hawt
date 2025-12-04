import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function PdfGuidesPage() {
  const PAGE_TITLE = 'PDF Guides';
  const PARAGRAPH_TEXT =
    "Printable versions of the Player's Guide, Arcana Guide, Dungeon Master Guidelines and Field Guide are available as PDFs. Visit the official site to download the latest versions.";

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_TEXT}</Typography>
    </Page>
  );
}
