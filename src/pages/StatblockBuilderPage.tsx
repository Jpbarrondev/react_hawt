import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function StatblockBuilderPage() {
  const PAGE_TITLE = 'Statblock Builder';
  const PARAGRAPH_1 =
    "Use the builder to generate formatted stat blocks for your custom monsters. Enter the creature's name, type, ability scores and actions, and the tool will produce a ready‑to‑use block.";
  const PARAGRAPH_2 =
    'The builder follows the official 5e layout and can be used both for submissions and personal notes.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
