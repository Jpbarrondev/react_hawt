import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function ServerRulesPage() {
  const PAGE_TITLE = 'Server Rules';
  const INTRO_TEXT =
    'The Hawthorne Guild strives to maintain a friendly and welcoming environment. All members are expected to follow the basic rules of conduct:';
  const ITEM_1 =
    'Show respect toward staff and fellow players. Be polite and considerate.';
  const ITEM_2 =
    'Avoid any hate speech, harassment or discrimination. This includes remarks about race, gender, religion or orientation.';
  const ITEM_3 = 'Keep content PG‑13. Explicit adult content is not allowed.';
  const ITEM_4 = 'Do not spam or advertise other servers.';
  const FOOTER_TEXT =
    'Violations of these rules may result in warnings or removal from the server. Full details and escalation steps can be found on the official server rules page.';

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
      </DiscList>
      <SectionParagraph>{FOOTER_TEXT}</SectionParagraph>
    </Page>
  );
}
