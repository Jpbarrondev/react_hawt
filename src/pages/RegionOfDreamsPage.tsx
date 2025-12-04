import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function RegionOfDreamsPage() {
  const PAGE_TITLE = 'Region of Dreams';
  const PARAGRAPH_1 =
    'The Region of Dreams is a surreal landscape where the laws of physics bend to imagination. Adventurers may find themselves walking on clouds or conversing with dream spirits. The plane is ruled by sleep dragons, chaotic beings embodying the essence of slumber.';
  const PARAGRAPH_2 =
    'When travelling here, prepare for shifting realities and unexpected encounters. Spells may behave strangely and time becomes fluid.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
