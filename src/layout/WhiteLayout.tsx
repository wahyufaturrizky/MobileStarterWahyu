import React, {ReactNode} from 'react';
import {ColorBaseEnum} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';
import {Row} from './Row';

export const WhiteLayout = ({
  children,
  borderRadius,
  backgroundColor,
}: {
  children: ReactNode;
  borderRadius: number;
  backgroundColor: string;
}) => (
  <Row
    backgroundColor={backgroundColor || ColorBaseEnum.white}
    flex={1}
    paddingVertical={PaddingEnum['3x']}
    paddingHorizontal={PaddingEnum['4x']}
    borderRadius={borderRadius || BorderRadiusEnum['0x']}>
    {children}
  </Row>
);
