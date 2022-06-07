/* eslint-disable react-native/no-inline-styles */
import {BackgroundImageLayoutInterface} from 'interface/backgroundimage.interface';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {ColorPrimaryEnum} from 'styles/Colors';

export const BackgroundImageLayout = (
  props: BackgroundImageLayoutInterface,
) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        height: props.height,
        width: props.width,
        padding: props.padding,
        backgroundColor: ColorPrimaryEnum.tolopea,
      }}
      resizeMode={props.resizeMode}
      source={props.source}>
      {!props.transparent && (
        <View
          style={{
            backgroundColor: props.backgroundColor,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: props.opacity,
          }}
        />
      )}
      {props.children}
    </ImageBackground>
  );
};
