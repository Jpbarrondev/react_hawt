import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Reusable page wrapper component. It provides consistent layout
 * elements such as the page title and spacing. Each page can use
 * this component to encapsulate its content, simplifying the
 * assembly of pages in the router.
 */
interface PageProps {
  /** The title displayed at the top of the page */
  title: string;
  /** The children contain the body of the page */
  children: ReactNode;
}

export default function Page({ title, children }: PageProps) {
  // Styled wrappers encapsulate the spacing logic previously defined in
  // `sx` props. Using styled-components promotes consistency and
  // reusability across all page layouts.
  const PageContainer = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(8),
  }));

  const PageTitle = styled((props: any) => (
    <Typography variant="h4" component="h1" {...props} />
  ))(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

  return (
    <PageContainer className="page">
      <PageTitle>{title}</PageTitle>
      {children}
    </PageContainer>
  );
}
