import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function SubmitMonsterPage() {
  const PAGE_TITLE = 'Submit a Monster';
  const PARAGRAPH_TEXT =
    'If you have created an original monster and would like to add it to the compendium, please fill out the form below. Include descriptive text, stats and any special abilities. A staff member will review your submission and provide feedback.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_TEXT}</Typography>
    </Page>
  );
}
