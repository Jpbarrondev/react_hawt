import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function SplitToothMountainPage() {
  const PAGE_TITLE = 'Split Tooth Mountain';
  const PARAGRAPH_1 =
    "A jagged peak split down the middle by a luminous fissure. Legends speak of the cube of Rubex and other powerful artefacts hidden within. Creatures such as vedalken engineers and stone golems guard the caverns, while Turlang the treant watches over the mountain's entrance.";
  const PARAGRAPH_2 =
    'Adventurers brave enough to scale the mountain must be prepared for traps, puzzles and deadly guardians.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
