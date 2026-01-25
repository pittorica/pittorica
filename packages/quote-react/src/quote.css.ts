import { recipe, type RuntimeFn } from '@vanilla-extract/recipes';

export const quoteRecipe: RuntimeFn<Record<string, never>> = recipe({
  base: {
    fontStyle: 'italic',
    quotes: '"“" "”" "‘" "’"',
    selectors: {
      '&::before': {
        content: 'open-quote',
      },
      '&::after': {
        content: 'close-quote',
      },
    },
  },
});
