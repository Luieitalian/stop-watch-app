import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
