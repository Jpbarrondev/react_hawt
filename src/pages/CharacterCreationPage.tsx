import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function CharacterCreationPage() {
  const PAGE_TITLE = 'Character Creation';
  const PARAGRAPH_1 =
    'Characters begin at level 3 with standard starting gold or equipment. Only official 5e content from Wizards of the Coast is permitted, including subclasses, feats and spells. Homebrew content is not allowed unless explicitly approved by staff.';
  const PARAGRAPH_2 =
    "Choose a race and background appropriate to the Forgotten Realms. You may customise your background and assign ability scores using the point buy or standard array methods. Multi‑classing follows the Player's Handbook rules.";

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
