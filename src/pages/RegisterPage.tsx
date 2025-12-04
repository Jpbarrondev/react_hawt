import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DecimalList, BulletListItem } from '../components/styledComponents';

export default function RegisterPage() {
  const PAGE_TITLE = 'How to Register';
  const INTRO_TEXT =
    'To become an adventurer in the Hawthorne Guild, follow these steps:';
  const ITEM_1 = 'Join the Discord server and read through the rules.';
  const ITEM_2 =
    "Create a character sheet using the guidelines in the Player's Guide.";
  const ITEM_3 = 'Submit your character to the staff for approval.';
  const ITEM_4 = (
    <>
      Once approved, register with the bot command <code>!register</code>.
    </>
  );
  const FOOTER_TEXT =
    'After registering, you can sign up for games and start logging your adventures.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{INTRO_TEXT}</Typography>
      <DecimalList>
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
      </DecimalList>
      <SectionParagraph>{FOOTER_TEXT}</SectionParagraph>
    </Page>
  );
}
