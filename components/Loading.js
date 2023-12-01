import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../theme';
const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator
        color={colors.primary}
        size={'large'}
      ></ActivityIndicator>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
