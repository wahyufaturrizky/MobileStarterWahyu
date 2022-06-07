import Text from 'components/Text/Text';
import {ButtonInterface} from 'interface/button.interface';
import {Row} from 'layout/Row';
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';

export const ButtonNormal = (props: ButtonInterface) => {
  const textColorPrimary = props.isDisable
    ? ColorBaseGrayEnum.gray
    : ColorBaseEnum.white;
  const textColorSecondary = props.isDisable
    ? ColorBaseGrayEnum.gray
    : ColorBaseEnum.black;

  if (props.variant === 'secondary') {
    return (
      <TouchableOpacity onPress={props.isDisable ? undefined : props.onPress}>
        <Row
          paddingHorizontal={PaddingEnum['4x']}
          paddingVertical={
            props.size === 'large'
              ? 18.5
              : props.size === 'medium'
              ? 11.5
              : PaddingEnum['1x']
          }
          borderRadius={props.borderRadius || BorderRadiusEnum['2x']}
          borderWidth={2}
          borderColor={props.isDisable ? ColorBaseGrayEnum.gray : '#D6D6D6'}
          flexDirection="row"
          alignItems="center"
          justifyContent={props.justifyContent || 'center'}>
          {props.withIconLeft}
          {props.isLoading !== undefined ? (
            <Row flexDirection="row" justifyContent="center">
              {props.isLoading ? (
                <ActivityIndicator color={ColorPrimaryEnum.tolopea} />
              ) : (
                <Text
                  label={props.label}
                  color={textColorSecondary}
                  textTransform="capitalize"
                  textAlign="center"
                  variant={
                    props.size === 'large' || props.size === 'medium'
                      ? 'h4-bold'
                      : 'p-regular'
                  }
                />
              )}
            </Row>
          ) : (
            <Text
              label={props.label}
              color={textColorSecondary}
              textTransform="capitalize"
              textAlign="center"
              variant={
                props.size === 'large' || props.size === 'medium'
                  ? 'h4-bold'
                  : 'p-regular'
              }
            />
          )}
          {props.withIconRight}
        </Row>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={props.isDisable || props.isLoading ? undefined : props.onPress}>
      <Row
        paddingHorizontal={PaddingEnum['4x']}
        paddingVertical={
          props.size === 'large'
            ? 18.5
            : props.size === 'medium'
            ? 11.5
            : PaddingEnum['1x']
        }
        borderRadius={props.borderRadius || BorderRadiusEnum['2x']}
        backgroundColor={
          props.isDisable ? ColorBaseGrayEnum.gray : ColorPrimaryEnum.tolopea
        }
        borderWidth={2}
        borderColor={
          props.isDisable ? ColorBaseGrayEnum.gray : ColorPrimaryEnum.tolopea
        }
        flexDirection="row"
        alignItems="center"
        justifyContent={props.justifyContent || 'center'}>
        {props.withIconLeft}
        {props.isLoading !== undefined ? (
          <Row flexDirection="row" justifyContent="center">
            {props.isLoading ? (
              <ActivityIndicator color={ColorBaseEnum.white} />
            ) : (
              <Text
                label={props.label}
                color={textColorPrimary}
                textTransform="capitalize"
                textAlign="center"
                variant={
                  props.size === 'large' || props.size === 'medium'
                    ? 'h4-bold'
                    : 'p-regular'
                }
              />
            )}
          </Row>
        ) : (
          <Text
            label={props.label}
            color={textColorPrimary}
            textTransform="capitalize"
            textAlign="center"
            variant={
              props.size === 'large' || props.size === 'medium'
                ? 'h4-bold'
                : 'p-regular'
            }
          />
        )}
        {props.withIconRight}
      </Row>
    </TouchableOpacity>
  );
};
