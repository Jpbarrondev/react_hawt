import { styled } from '@mui/material/styles';
import { List, ListItem, Typography } from '@mui/material';

/**
 * Shared styled components for lists. These wrappers encapsulate
 * common list styles such as decimal and disc bullets. Using
 * styled-components instead of the `sx` prop helps to centralise
 * styling and reuse across multiple pages.
 */

/**
 * A list with decimal bullets and appropriate left padding. Use this
 * component when you need an ordered list. The underlying MUI List
 * still supports the `dense` prop and other attributes.
 */
export const DecimalList = styled(List)(({ theme }) => ({
  listStyleType: 'decimal',
  paddingLeft: theme.spacing(4),
}));

/**
 * A list with disc bullets and left padding. Use this component for
 * unordered lists. Like DecimalList, it accepts all List props.
 */
export const DiscList = styled(List)(({ theme }) => ({
  listStyleType: 'disc',
  paddingLeft: theme.spacing(4),
}));

/**
 * Styled list item that behaves as a list-item. MUI ListItem uses
 * flex display by default, which suppresses list bullets. Apply
 * display: list-item to restore bullet markers. This component
 * accepts all ListItem props and can be used within DecimalList or
 * DiscList.
 */
export const BulletListItem = styled(ListItem)(() => ({
  display: 'list-item',
}));

/**
 * SectionTitle wraps a Typography with variant "h5" and applies
 * consistent margin‑top spacing. It can be used across pages when
 * introducing new sections. This reduces repeated `sx` usage.
 */
export const SectionTitle = styled((props: any) => (
  <Typography variant="h5" {...props} />
))(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

/**
 * SectionParagraph wraps a Typography with the `paragraph` prop and
 * applies a top margin. Use this component for paragraphs that
 * require separation from preceding content. Regular paragraphs
 * without extra spacing can still use Typography directly.
 */
export const SectionParagraph = styled((props: any) => (
  <Typography paragraph {...props} />
))(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
