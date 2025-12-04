import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function ImportantLinksPage() {
  const PAGE_TITLE = 'Important Links';
  const INTRO_TEXT = 'Below are quick references to common resources:';
  const ITEM_1 = (
    <>
      <strong>Character Sheet</strong> – use D&amp;D Beyond or Myth‑Weavers to
      track your character.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Discord Commands</strong> – commands for registering, tracking
      downtime and more.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>Channels</strong> – where to find game advertisements, logs and
      discussions.
    </>
  );
  const FOOTER_TEXT =
    'Check the actual server for up‑to‑date links and channel names.';

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
