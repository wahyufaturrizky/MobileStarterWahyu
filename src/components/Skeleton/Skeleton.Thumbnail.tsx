import {StyleBaseInterface} from 'interface/base.interface';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React from 'react';
import {Dimensions} from 'react-native';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {BorderRadiusEnum, MarginEnum} from 'styles/Spacer';
import {Skeleton} from '.';

export const SkeletonThumbnail = (props: StyleBaseInterface) => {
  const {height} = Dimensions.get('window');
  return (
    <Row
      flexDirection="column"
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}>
      <Skeleton
        color={ColorBaseGrayEnum.gray}
        width={height * 0.3}
        height={height * 0.2}
        borderRadius={BorderRadiusEnum['0.5x']}
      />
      <Skeleton
        color={ColorBaseGrayEnum.gray}
        width={150}
        height={15}
        borderRadius={BorderRadiusEnum['0.5x']}
        marginTop={MarginEnum['2x']}
      />
      <Skeleton
        color={ColorBaseGrayEnum.gray}
        width={200}
        height={10}
        borderRadius={BorderRadiusEnum['0.5x']}
        marginTop={MarginEnum['2x']}
      />
      <Row
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row">
        <Col>
          <Skeleton
            color={ColorBaseGrayEnum.gray}
            width={50}
            height={10}
            borderRadius={BorderRadiusEnum['0.5x']}
            marginTop={MarginEnum['2x']}
          />
        </Col>
        <Col>
          <Skeleton
            color={ColorBaseGrayEnum.gray}
            width={50}
            height={10}
            borderRadius={BorderRadiusEnum['0.5x']}
            marginTop={MarginEnum['2x']}
          />
        </Col>
      </Row>
    </Row>
  );
};
