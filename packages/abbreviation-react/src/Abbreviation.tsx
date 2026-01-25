import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { abbreviationStyle } from './abbreviation.css.js';

type AbbreviationVariants = RecipeVariants<typeof abbreviationStyle>;

/**
 * Props for the Abbreviation component.
 */
export interface AbbreviationProps extends Omit<BoxProps, 'as'> {
  /**
   * The full explanation of the abbreviation (displayed on hover).
   * Required for accessibility.
   */
  title: string;

  /**
   * The visual variant of the abbreviation.
   * @default 'default'
   */
  variant?: NonNullable<AbbreviationVariants>['variant'];
}

/**
 * A semantic component for abbreviations and acronyms.
 * Renders an `<abbr>` element with proper accessibility attributes.
 * The full form is displayed on hover via the title attribute.
 *
 * @param props - Component props.
 * @returns The rendered abbreviation element.
 * @example
 * <Abbreviation title="HyperText Markup Language">HTML</Abbreviation>
 * @example
 * <Abbreviation title="Cascading Style Sheets" variant="noUnderline">CSS</Abbreviation>
 */
export const Abbreviation: React.FC<AbbreviationProps> = ({
  title,
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const recipeClass = abbreviationStyle({ variant });

  return (
    <Box
      as="abbr"
      title={title}
      className={clsx(recipeClass, className)}
      {...props}
    >
      {children}
    </Box>
  );
};
