import Page from '../components/Page';
import { Typography } from '@mui/material';
import { SectionTitle } from '../components/styledComponents';

export default function IndexPage() {
  const PAGE_TITLE = 'Hawthorne Guild';
  const INTRO_TEXT =
    'The Hawthorne Guild is a Dungeons & Dragons community set in the Forgotten Realms. Adventurers gather at Hawthorne to embark on shared adventures across a persistent game world. Characters progress over multiple games, accrue treasure, and form lasting memories.';
  const SECTION_1_TITLE = 'Getting Started';
  const SECTION_1_TEXT =
    'If you are new, start by reading the server rules, learning how to register, and reviewing the beginner guides. Use the sidebar to navigate through these resources.';
  const SECTION_2_TITLE = 'For Players';
  const SECTION_2_TEXT =
    "Players can find resources to create characters, log their adventures, and understand downtime activities. The Player's Guide covers everything you need to know before joining your first game.";
  const SECTION_3_TITLE = 'For Dungeon Masters';
  const SECTION_3_TEXT =
    'Dungeon Masters can explore the Monster Compendium and Field Guide. These sections provide lore and encounters for your stories. Contributions are welcome!';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{INTRO_TEXT}</Typography>
      <SectionTitle>{SECTION_1_TITLE}</SectionTitle>
      <Typography paragraph>{SECTION_1_TEXT}</Typography>
      <SectionTitle>{SECTION_2_TITLE}</SectionTitle>
      <Typography paragraph>{SECTION_2_TEXT}</Typography>
      <SectionTitle>{SECTION_3_TITLE}</SectionTitle>
      <Typography paragraph>{SECTION_3_TEXT}</Typography>
    </Page>
  );
}
