import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function AppendicesPage() {
  const PAGE_TITLE = 'Appendices';
  const INTRO_TEXT =
    'The appendices provide supplemental material for special situations and optional rules:';
  const ITEM_1 = (
    <>
      <strong>2024 PCs &amp; Games</strong> – guidelines for characters built
      with the 2024 playtest material. Only compatible subclasses and optional
      features are allowed.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Bastions</strong> – rules for building and upgrading your own
      stronghold, including hirelings and additional facilities.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>D&amp;D Beyond Settings</strong> – recommended configuration for
      the Beyond20 browser extension and other digital tools.
    </>
  );

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{INTRO_TEXT}</Typography>
      <DiscList dense>
        <BulletListItem>
          <ListItemText primary={ITEM_1} />
        </BulletListItem>
        <BulletListItem>
          <ListItemText primary={ITEM_2} />
        </BulletListItem>
        <BulletListItem>
          <ListItemText primary={ITEM_3} />
        </BulletListItem>
      </DiscList>
    </Page>
  );
}
