import {ReactNode} from 'react';
import {ColorValue, FlexAlignType, ImageResizeMode} from 'react-native';

export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

export type TextTransformType =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase';

export type TextAlignVerticalType = 'center' | 'auto' | 'top' | 'bottom';

export type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TextAlignType = 'center' | 'auto' | 'left' | 'right' | 'justify';

export type FontStyleType = 'normal' | 'italic';

export type TextDecorationLineType =
  | 'underline'
  | 'none'
  | 'line-through'
  | 'underline line-through';

export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type BorderStyleType = 'solid' | 'dotted' | 'dashed';

export interface StyleBaseInterface {
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  paddingBottom?: number | string;
  marginHorizontal?: number | string;
  margin?: number | string;
  paddingHorizontal?: number | string;
  marginLeft?: number | string;
  paddingVertical?: number | string;
  borderTopWidth?: number;
  flex?: number;
  borderWidth?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  borderBottomWidth?: number;
  textAlignVertical?: TextAlignVerticalType;
  opacity?: number;
  fontWeight?: FontWeightType;
  color?: string;
  resizeMode?: ImageResizeMode;
  textDecorationLine?: TextDecorationLineType;
  textAlign?: TextAlignType;
  textTransform?: TextTransformType;
  fontStyle?: FontStyleType;
  flexWrap?: FlexWrapType;
  borderColor?: string;
  borderTopColor?: string;
  shadowColor?: ColorValue;
  shadowOffset?: {width: number; height: number};
  borderBottomColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  marginTop?: number | string;
  marginVertical?: number | string;
  marginRight?: number;
  borderStyle?: BorderStyleType;
  marginBottom?: number;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  alignSelf?: FlexAlignType | 'auto';
  flexDirection?: FlexDirectionType;
  children?: ReactNode;
}
