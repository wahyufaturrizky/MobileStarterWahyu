import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';
import {StyleBaseInterface} from './base.interface';

export type ButtonVariantType = 'secondary' | 'primary';
export type SizeType = 'large' | 'medium' | 'small';

export interface ButtonInterface extends StyleBaseInterface {
  isDisable?: boolean;
  isLoading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariantType;
  withIconLeft?: ReactNode;
  withIconRight?: ReactNode;
  label?: string;
  size?: SizeType;
}
