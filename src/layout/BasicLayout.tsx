/* eslint-disable react-native/no-inline-styles */
import {BasicLayoutInterface} from 'interface/basiclayout.interface';
import React from 'react';
import {View, ScrollView} from 'react-native';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {MarginEnum} from 'styles/Spacer';

export const BasicLayout = (props: BasicLayoutInterface) =>
  props.isWithoutScroll ? (
    <View
      style={{
        marginBottom: props.marginBottom,
        marginTop: props.marginTop,
        flex: 1,
        marginLeft: MarginEnum['4x'],
        marginRight: MarginEnum['4x'],
      }}>
      {props.children}
    </View>
  ) : (
    <ScrollView
      style={{
        backgroundColor: props.backgroundColor || ColorBaseGrayEnum.gray,
      }}
      refreshControl={props.refreshControl}
      scrollIndicatorInsets={{right: Number.MIN_VALUE}}
      contentContainerStyle={{
        flexGrow: props.disableGrow ? 0 : 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginBottom: props.marginBottom,
          marginTop: props.marginTop,

          flex: 1,
          marginLeft: MarginEnum['4x'],
          marginRight: MarginEnum['4x'],
        }}>
        {props.children}
      </View>
    </ScrollView>
  );
