import { Box, Grid } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function GridRoute() {
  return (
    <DocPage
      name="Grid"
      description="Grid is a powerful layout component based on CSS Grid. It supports responsive column and row configurations, gaps, and fluid auto-wrapping."
      packageName="grid-react"
      props={[
        {
          name: 'columns',
          type: 'Responsive<GridRepeat>',
          description: 'Number of columns (1-12) or fluid (e.g. "auto-200px").',
        },
        {
          name: 'rows',
          type: 'Responsive<GridRepeat>',
          description: 'Number of rows.',
        },
        {
          name: 'gap',
          type: 'Responsive<0-9>',
          description: 'Gap between items.',
        },
        {
          name: 'flow',
          type: '"row" | "column" | "dense"',
          description: 'Grid auto flow.',
        },
        { name: 'align', type: 'string', description: 'Align-items.' },
        { name: 'justify', type: 'string', description: 'Justify-items.' },
      ]}
      examples={[
        {
          title: 'Fixed Columns',
          description: 'A 3-column grid with gap.',
          code: `<Grid columns="3" gap="4">
  <Box height="64px" style={{ background: 'var(--pittorica-indigo-3)' }} />
  <Box height="64px" style={{ background: 'var(--pittorica-indigo-3)' }} />
  <Box height="64px" style={{ background: 'var(--pittorica-indigo-3)' }} />
</Grid>`,
          render: (
            <Grid columns="3" gap="4">
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                }}
              />
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                }}
              />
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                }}
              />
            </Grid>
          ),
        },
        {
          title: 'Fluid Grid',
          description:
            'Items automatically wrap and fill space based on a minimum width.',
          code: `<Grid columns="auto-150px" gap="4">
  <Box height="64px" style={{ background: 'var(--pittorica-teal-3)' }} />
  <Box height="64px" style={{ background: 'var(--pittorica-teal-3)' }} />
  <Box height="64px" style={{ background: 'var(--pittorica-teal-3)' }} />
</Grid>`,
          render: (
            <Grid columns="auto-150px" gap="4">
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: '4px',
                }}
              />
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: '4px',
                }}
              />
              <Box
                height="64px"
                style={{
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: '4px',
                }}
              />
            </Grid>
          ),
        },
      ]}
    />
  );
}
