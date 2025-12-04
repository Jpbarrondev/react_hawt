import Page from '../components/Page';
import { Typography } from '@mui/material';

export default function EarthNodesPage() {
  const PAGE_TITLE = 'Earth Nodes';
  const PARAGRAPH_1 =
    'Earth nodes are rare pockets of elemental earth energy. They empower spells, enhance crafting and serve as portals to deeper ley lines. Each node has unique properties – some grant resistance to damage, while others amplify transmutation magic.';
  const PARAGRAPH_2 =
    'Players may research nodes to unlock their secrets. Travelling between nodes often requires navigating treacherous terrain or negotiating with earth elementals.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{PARAGRAPH_1}</Typography>
      <Typography paragraph>{PARAGRAPH_2}</Typography>
    </Page>
  );
}
