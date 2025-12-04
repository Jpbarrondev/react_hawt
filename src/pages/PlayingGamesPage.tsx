import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionTitle } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function PlayingGamesPage() {
  const PAGE_TITLE = 'Playing Games';
  const INTRO_TEXT =
    'The Hawthorne Guild runs one‑shots, open campaigns and closed campaigns. All games take place in the shared world, so your actions have lasting consequences.';
  const SECTION_1_TITLE = 'Finding Games';
  const SECTION_1_TEXT = (
    <>
      Watch the <strong>#game‑advertisements</strong> channel for upcoming
      sessions. Sign up quickly if you wish to join.
    </>
  );
  const SECTION_2_TITLE = 'During the Game';
  const ITEM_1 = 'Be respectful to the DM and other players.';
  const ITEM_2 =
    'Follow table etiquette: no meta‑gaming, avoid disruptions and participate actively.';
  const ITEM_3 =
    'Record your rewards and downtime in your MAL after the session.';
  const SECTION_3_TITLE = 'Death & Resurrection';
  const SECTION_3_TEXT =
    'Characters who die may be resurrected at the cost of gold and downtime. Permanent death is rare but possible if the party is unable to recover the body.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{INTRO_TEXT}</Typography>
      <SectionTitle>{SECTION_1_TITLE}</SectionTitle>
      <Typography paragraph>{SECTION_1_TEXT}</Typography>
      <SectionTitle>{SECTION_2_TITLE}</SectionTitle>
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
      <SectionTitle>{SECTION_3_TITLE}</SectionTitle>
      <Typography paragraph>{SECTION_3_TEXT}</Typography>
    </Page>
  );
}
