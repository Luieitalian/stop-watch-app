import {Pressable, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../theme';
import * as Haptics from 'expo-haptics';
const ControlButton = ({title}) => {
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
    borderColor: colors.primaryOutline,
    borderRadius: 80,
    borderWidth: 0.6,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
});
