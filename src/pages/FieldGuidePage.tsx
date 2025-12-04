import Page from '../components/Page';
import { Typography, ListItemText } from '@mui/material';
import { DiscList, BulletListItem } from '../components/styledComponents';

export default function FieldGuidePage() {
  const PAGE_TITLE = 'Field Guide Contents';
  const INTRO_TEXT =
    'The Field Guide contains lore and adventure locations beyond Hawthorne. Explore mysterious realms and meet strange inhabitants:';
  const ITEM_1 = (
    <>
      <strong>Region of Dreams</strong> – a whimsical plane blending reality and
      imagination.
    </>
  );
  const ITEM_2 = (
    <>
      <strong>Split Tooth Mountain</strong> – home to ancient artefacts and
      perilous foes.
    </>
  );
  const ITEM_3 = (
    <>
      <strong>Earth Nodes</strong> – pockets of elemental energy that empower
      magic.
    </>
  );
  const ITEM_4 = (
    <>
      <strong>Underwater District</strong> – an aquatic metropolis accessed
      through a hidden portal.
    </>
  );

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
    </Page>
  );
}
