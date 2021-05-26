import React from 'react';
import {View, Text, Alert, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Button from './Button';
import styles from './styles';
import PropTypes from 'prop-types';

const TodoList = ({item, deleteItem, toggleCheck, showStatus}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemSection}>
        <View style={styles.leftItemInfo}>
          <CheckBox
            value={item.completed}
            onValueChange={() => toggleCheck(item.id)}
            boxType="square"
            style={[
              styles.checkboxItem,
              Platform.OS == 'ios' && {backgroundColor: '#e0e0e0'},
            ]}
            tintColors={{true: '#7c7c7c'}}
            tintColor={'#7c7c7c'}
            onCheckColor={'#676767'}
            onFillColor={'#f5f5f5'}
            onTintColor={'#b2b2b2'}
            disabled={item.completed}
          />
          <View>
            <Text
              style={[styles.itemName, item.completed && {color: '#888888'}]}
              numberOfLines={2}>
              {item.name}
            </Text>
            {showStatus && (
              <Text
                style={[
                  styles.itemStatus,
                  item.completed && {color: '#888888'},
                ]}>
                Status: {item.completed ? 'Done' : 'Active'}
              </Text>
            )}
          </View>
        </View>
        <Button
          pressHandler={() => deleteItem(item.id)}
          style={styles.itemButtonDetele}>
          <Text style={styles.itemButtonText}>x</Text>
        </Button>
      </View>
    </View>
  );
};

TodoList.propTypes = {
  deleteItem: PropTypes.func,
  toggleCheck: PropTypes.func,
  item: PropTypes.object,
  showStatus: PropTypes.bool,
};

TodoList.defaultProps = {
  deleteItem: () => Alert.alert('delete clicked'),
  toggleCheck: () => Alert.alert('toggle clicked'),
  showStatus: false,
};

export default TodoList;
