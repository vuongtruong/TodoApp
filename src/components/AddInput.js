import React, {useState, useContext, memo} from 'react';
import {View, Alert, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../constants';
import {TodoContext} from './../provider/createAppContext';
import PropTypes from 'prop-types';

const AddInput = memo(({submitHandler}) => {
  const {addItem} = useContext(TodoContext);
  const [value, setValue] = useState('');
  const onChangeText = text => {
    setValue(text);
  };
  const onSubmitHandler = value => {
    if (!value) return Alert.alert('Please input content');
    submitHandler();
    addItem(value);
    setValue('');
  };
  return (
    <View style={styles.textInputSection}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter todo name here"
        placeholderTextColor={COLORS.black}
        selectionColor={COLORS.black}
        onChangeText={onChangeText}
        onSubmitEditing={() => {
          onSubmitHandler(value);
        }}
        value={value}
      />
    </View>
  );
});

AddInput.propTypes = {
  submitHandler: PropTypes.func,
};

AddInput.defaultProps = {
  submitHandler: () => Alert.alert('submit clicked'),
};

export default AddInput;
