export type PittoricaDisplay =
  | 'none'
  | 'inline'
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid';

export type PittoricaPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

export type PittoricaResponsive<T> =
  | T
  | {
      initial?: T;
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };

export type PittoricaScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PittoricaVariant =
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'elevated'
  | 'text'
  | 'surface';

export type PittoricaOrientation = 'horizontal' | 'vertical';

export type PittoricaFlexDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';
export type PittoricaFlexAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'baseline'
  | 'stretch';
export type PittoricaFlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
export type PittoricaFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type PittoricaGridFlow =
  | 'row'
  | 'column'
  | 'dense'
  | 'row-dense'
  | 'column-dense';
export type PittoricaGridAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'baseline'
  | 'stretch';
export type PittoricaGridJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';
export type PittoricaGridRepeat =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none'
  | (string & {});

export type PittoricaHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type PittoricaHeadingVariant = 'classic' | 'soft' | 'outline';
