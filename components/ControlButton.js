import {Pressable, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../theme';
import * as Haptics from 'expo-haptics';

const ControlButton = ({title, functionality, name}) => {
  const buttonAnim = useRef(new Animated.Value(1)).current;
  const buttonPressed = () => {
    console.log('pressed');
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: 0.5,
        useNativeDriver: true,
        duration: 80,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        useNativeDriver: true,
        duration: 80,
      }),
    ]).start();
    if (name === 'done') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    functionality();
  };

  return (
    <Animated.View style={{opacity: buttonAnim}}>
      <Pressable style={styles.button} onPress={buttonPressed}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default ControlButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderRadius: 80,
    borderWidth: 6,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
  },
});
