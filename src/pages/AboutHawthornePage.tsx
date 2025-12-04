import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function AboutHawthornePage() {
  const PAGE_TITLE = 'About Hawthorne';
  const PARAGRAPH_1 =
    'The Hawthorne Guild is headquartered in the city of Hawthorne, a bustling metropolis in the Sword Coast. Founded centuries ago, the guild serves as a hub for adventurers seeking fame and fortune. The guild hall contains libraries of lore, training grounds and portals to far‑flung realms.';
  const PARAGRAPH_2 =
    "Adventurers are expected to uphold the guild's code of conduct: treat NPCs and players with respect, follow the instructions of your Dungeon Masters, and avoid disruptive behaviour. For full details see the server rules.";

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
