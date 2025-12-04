import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function PrivacyPolicyPage() {
  const PAGE_TITLE = 'Privacy Policy';
  const PARAGRAPH_1 =
    'This community collects only the data required to operate the server, such as Discord user IDs and messages. Personal information is never sold or shared with third parties. Data is retained only as long as necessary to provide service and fulfil legal obligations.';
  const PARAGRAPH_2 =
    'You have the right to request access to your stored data or request its removal. Please contact an administrator if you have any questions about your privacy rights.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
