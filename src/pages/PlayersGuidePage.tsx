import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function PlayersGuidePage() {
  const PAGE_TITLE = "Player's Guide Contents";
  const INTRO_TEXT =
    "The Player's Guide contains several sections to help you get started as an adventurer. Use the navigation to explore:";
  const ITEM_1 = (
    <>
      <strong>About Hawthorne</strong> – learn the history of the guild and its
      home city.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Character Creation</strong> – guidelines for building your
      character using official 5e content.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>Your MAL</strong> – how to maintain your Master Adventurer's Log.
    </>
  );
  const ITEM_4 = (
    <>
      <strong>Playing Games</strong> – rules for finding and participating in
      games, including death and resurrection.
    </>
  );
  const ITEM_5 = (
    <>
      <strong>Downtime</strong> – how to spend downtime points on crafting,
      training, trading and travel.
    </>
  );
  const ITEM_6 = (
    <>
      <strong>Appendices</strong> – additional rules and settings for special
      cases, bastions and character options.
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
        <BulletListItem>
          <ListItemText primary={ITEM_4} />
        </BulletListItem>
        <BulletListItem>
          <ListItemText primary={ITEM_5} />
        </BulletListItem>
        <BulletListItem>
          <ListItemText primary={ITEM_6} />
        </BulletListItem>
      </DiscList>
    </Page>
  );
}
