import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function MonstersPage() {
  const PAGE_TITLE = 'Monster Compendium';
  const PARAGRAPH_1 =
    'The compendium lists creatures encountered across the Hawthorne campaigns. It includes stat blocks, lore and suggested encounter levels. Use the filter controls to search by name, type or challenge rating.';
  const PARAGRAPH_2 =
    'Dungeon Masters can submit new monsters using the submission form. All contributions are reviewed before appearing in the compendium.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
