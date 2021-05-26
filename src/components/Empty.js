import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No item found</Text>
    </View>
  );
}
