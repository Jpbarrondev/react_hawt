import Page from '../components/Page';
import { Typography, Box } from '@mui/material';

export default function FaqPage() {
  const PAGE_TITLE = 'Frequently Asked Questions';
  const INTRO_TEXT =
    'This section answers common questions about the Hawthorne Guild:';
  const Q1_LABEL = 'What is the Hawthorne Guild?';
  const Q1_ANSWER =
    'A D&D 5e server where all games take place in a shared persistent world. Players create characters that adventure together across multiple games.';
  const Q2_LABEL = 'Does the server play 2014 or 2024 games?';
  const Q2_ANSWER =
    'Most games use the 2014 5e rules. A few Dungeon Masters run 2024 playtest material, but players should check with their DM before joining.';
  const Q3_LABEL = "How do I track my character's progress?";
  const Q3_ANSWER =
    "Use the Master Adventurer's Log to record adventures, loot and downtime. Keeping an accurate log is mandatory.";
  const Q4_LABEL = 'What happens if my character dies?';
  const Q4_ANSWER =
    'Death is not the end! Characters may be resurrected by paying the appropriate costs. Permanent death occurs only if recovery is impossible.';

  return (
    <Page title={PAGE_TITLE}>
      <Typography paragraph>{INTRO_TEXT}</Typography>
      <Box component="dl">
        <dt>
          <strong>{Q1_LABEL}</strong>
        </dt>
        <dd>{Q1_ANSWER}</dd>
        <dt>
          <strong>{Q2_LABEL}</strong>
        </dt>
        <dd>{Q2_ANSWER}</dd>
        <dt>
          <strong>{Q3_LABEL}</strong>
        </dt>
        <dd>{Q3_ANSWER}</dd>
        <dt>
          <strong>{Q4_LABEL}</strong>
        </dt>
        <dd>{Q4_ANSWER}</dd>
      </Box>
    </Page>
  );
}
