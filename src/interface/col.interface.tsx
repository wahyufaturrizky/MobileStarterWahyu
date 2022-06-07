import {ReactNode} from 'react';
import {StyleBaseInterface} from './base.interface';

export interface ColInterface extends StyleBaseInterface {
  children?: ReactNode;
  size?: number;
}
