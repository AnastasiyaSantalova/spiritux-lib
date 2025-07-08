export type SpirituxButtonTypes = 'button' | 'submit' | 'reset';
export type SpirituxButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type SpirituxButtonColor = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';
export type SpirituxButtonSize = 'small' | 'medium' | 'large';
export type SpirituxButtonShape = 'square' | 'circle' | 'pill';
export type SpirituxButtonIcons =
  | 'none'
  | 'close'
  | 'arrow-right'
  | 'arrow-left'
  | 'angle-right'
  | 'angle-left';
export type SpirituxButtonIconPosition = 'left' | 'right';

export interface SpirituxButtonProps {
  name?: string;
  type?: SpirituxButtonTypes;
  variant?: SpirituxButtonVariant;
  color?: SpirituxButtonColor;
  size?: SpirituxButtonSize;
  icon?: SpirituxButtonIcons;
  iconPosition?: SpirituxButtonIconPosition;
  shape?: SpirituxButtonShape;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}
