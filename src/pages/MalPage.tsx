import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function MalPage() {
  const PAGE_TITLE = "Your MAL (Master Adventurer's Log)";
  const INTRO_TEXT =
    'The MAL is your official record of games played, treasure acquired and downtime spent. Keep it up to date!';
  const ITEM_1 =
    'Record the title of each adventure, the date played and participating party members.';
  const ITEM_2 =
    'List all loot and experience gained. Do not hide or misrepresent your rewards.';
  const ITEM_3 =
    'Document downtime activities such as crafting or research. Include the time spent and outcomes.';
  const FOOTER_TEXT =
    'Your MAL must be presented when registering for games or levelling up. Staff may audit logs at any time.';

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
      <SectionParagraph>{FOOTER_TEXT}</SectionParagraph>
    </Page>
  );
}
