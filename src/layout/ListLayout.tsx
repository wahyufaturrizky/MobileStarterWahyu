import {StyleBaseInterface} from 'interface/base.interface';
import React from 'react';
import {MarginEnum} from 'styles/Spacer';
import {Row} from './Row';

export const ListLayout = (props: StyleBaseInterface) => (
  <Row flex={1} paddingBottom={MarginEnum['6x']}>
    {props.children}
  </Row>
);
