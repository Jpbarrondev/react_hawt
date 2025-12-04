import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function ServerRolesPage() {
  const PAGE_TITLE = 'Server Roles & Hierarchy';
  const INTRO_TEXT =
    'The Hawthorne Guild is organised into several roles to manage the community effectively:';
  const ITEM_1 = (
    <>
      <strong>Administrators</strong> – oversee the server and enforce policies.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Dungeon Masters</strong> – run games and guide players through
      adventures.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>Adventurers</strong> – the players participating in games. They
      create characters and log their adventures.
    </>
  );
  const ITEM_4 = (
    <>
      <strong>Support Roles</strong> – moderators, event organisers and other
      helpers.
    </>
  );
  const FOOTER_TEXT =
    'For a complete list of roles and their privileges, refer to the hierarchy documentation.';

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
