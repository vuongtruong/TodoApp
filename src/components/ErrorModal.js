import React, {useState, useContext, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';
import {TodoContext} from './../provider/createAppContext';

const ErrorModal = () => {
  const {errorVisible, errorContent, hideError} = useContext(TodoContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentError, setContentError] = useState(errorContent);
  useEffect(() => {
    setModalVisible(errorVisible);
    setContentError(errorContent);
  }, [errorVisible]);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{contentError}</Text>
          <Pressable style={styles.button} onPress={hideError}>
            <Text style={styles.textStyle}>Hide</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 45,
    backgroundColor: COLORS.drakRed,
    borderRadius: SIZES.radius / 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    ...FONTS.body3,
  },
  modalText: {
    marginBottom: SIZES.padding * 2,
    textAlign: 'center',
    ...FONTS.body4,
  },
});

export default ErrorModal;
