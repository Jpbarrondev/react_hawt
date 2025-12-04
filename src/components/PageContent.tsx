import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SectionTitle } from './styledComponents';
import { pages, Page } from '../data/pages';

/**
 * Component responsible for rendering the content of the current page.
 * It resolves the path to a React component defined in src/pages and
 * renders it. If no component matches the current path, a fallback
 * message is displayed.
 */
export default function PageContent() {
  const params = useParams();
  // Construct the full path from the wildcard parameter. When no
  // wildcard is provided, this resolves to the root path '/'.
  const path = `/${params['*'] ?? ''}`;

  // Find the matching page definition. Paths may include nested segments.
  const page: Page | undefined = useMemo(
    () => pages.find((p) => p.path === path),
    [path],
  );

  if (!page) {
    return <SectionTitle>Page not found</SectionTitle>;
  }
  // The `content` property holds the React component that renders
  // this page’s body. We assign it to a variable starting with
  // capital letter to satisfy JSX requirements.
  const PageContentComponent = page.content;
  return <PageContentComponent />;
}
