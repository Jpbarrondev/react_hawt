import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { SectionParagraph } from '../components/styledComponents';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function DowntimePage() {
  const PAGE_TITLE = 'Downtime Activities';
  const INTRO_TEXT =
    'After each game you receive downtime points which can be spent on various activities:';
  const ITEM_1 = (
    <>
      <strong>Crafting</strong> – create magic items or mundane gear.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Research</strong> – learn about spells, monsters or lore. Could
      provide advantage in future quests.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>Training</strong> – gain tool proficiencies or languages.
    </>
  );
  const ITEM_4 = (
    <>
      <strong>Trading</strong> – buy and sell goods. Visit merchants in
      Hawthorne or other cities.
    </>
  );
  const ITEM_5 = (
    <>
      <strong>Travel</strong> – move between regions. Travel times vary; see the
      table of distances for details.
    </>
  );
  const FOOTER_TEXT =
    'Keep track of your downtime usage in your MAL. Some activities may require approval from a DM.';

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
      </DiscList>
      <SectionParagraph>{FOOTER_TEXT}</SectionParagraph>
    </Page>
  );
}
