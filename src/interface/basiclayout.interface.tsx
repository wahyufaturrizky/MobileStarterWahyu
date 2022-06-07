import {JSXElementConstructor, ReactElement} from 'react';
import {RefreshControlProps} from 'react-native';
import {StyleBaseInterface} from './base.interface';

export interface BasicLayoutInterface extends StyleBaseInterface {
  isWithoutScroll?: boolean;
  disableGrow?: boolean;
  refreshControl?: ReactElement<
    RefreshControlProps,
    string | JSXElementConstructor<any>
  >;
}
