import { recipe } from '@vanilla-extract/recipes';

export const abbreviationStyle = recipe({
  base: {
    textDecoration: 'underline dotted',
    cursor: 'help',
    textUnderlineOffset: '3px',
  },
  variants: {
    variant: {
      /**
       * Default variant with dotted underline.
       */
      default: {},

      /**
       * Variant without underline decoration.
       */
      noUnderline: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
