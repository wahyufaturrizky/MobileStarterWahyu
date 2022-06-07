import {StyleBaseInterface, TextTransformType} from './base.interface';

export interface TextInterface extends StyleBaseInterface {
  isShowSkeleton?: boolean;
  wrapText?: boolean;
  colorSkeleton?: string;
  label2?: string;
  label?: string;
  variant?: string;
  textTransform1?: TextTransformType;
  textTransform2?: TextTransformType;
  label1?: string;
  widthSkeleton?: number;
  heightSkeleton?: number;
  borderRadiusSkeleton?: number;
  marginTopSkeleton?: number;
  marginBottomSkeleton?: number;
}
