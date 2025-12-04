import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function UnderwaterDistrictPage() {
  const PAGE_TITLE = 'Underwater District';
  const PARAGRAPH_1 =
    'Beneath Hawthorne lies a hidden district submerged in an enormous cavern. A magical membrane holds back the water, creating a habitable bubble where merfolk and tritons trade.';
  const PARAGRAPH_2 =
    "The district contains portals to the Elemental Plane of Water and Sultan Rezzo's palace. Adventures here involve navigating submerged passages, bargaining with sea elves, and avoiding danger from aquatic monsters.";

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
