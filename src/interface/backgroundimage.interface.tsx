import {ImageSourcePropType} from 'react-native';
import {StyleBaseInterface} from './base.interface';

export interface BackgroundImageLayoutInterface extends StyleBaseInterface {
  imageStyle?: string;
  source: ImageSourcePropType;
  transparent?: boolean;
}
