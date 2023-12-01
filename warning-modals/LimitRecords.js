import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../theme';
import {Snackbar} from 'react-native-paper';

const LimitRecords = ({visible}) => {
  return (
    <Snackbar style={styles.snackbar} visible={visible}>
      "You can't add more than 20 records!"
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: colors.white,
  },
});

export default LimitRecords;
