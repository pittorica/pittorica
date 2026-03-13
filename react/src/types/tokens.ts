export type PittoricaBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PittoricaSpace =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type PittoricaRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export type PittoricaShadow =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type PittoricaSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type PittoricaFontSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type PittoricaLineHeight =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type PittoricaColorName =
  | 'amber'
  | 'blue'
  | 'crimson'
  | 'danger'
  | 'error'
  | 'gray'
  | 'indigo'
  | 'info'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'slate'
  | 'source'
  | 'success'
  | 'teal'
  | 'warning';

export type PittoricaColorStep =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '11';

export type PittoricaSurfaceStep =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type PittoricaAppearance = 'light' | 'dark';

export type PittoricaWeight = 'light' | 'regular' | 'medium' | 'bold';

export type PittoricaColor = PittoricaColorName | 'inherit' | (string & {});
