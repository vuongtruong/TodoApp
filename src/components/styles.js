import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding * 2,
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding,
  },
  headerSection: {flex: 1},
  headerTitle: {...FONTS.h1},
  textInputSection: {
    marginTop: SIZES.padding,
  },
  textInput: {
    marginVertical: SIZES.padding,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
    height: 50,
    color: COLORS.black,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    ...FONTS.h4,
  },
  contentContainerStyle: {
    marginHorizontal: SIZES.padding * 2,
  },
  itemContainer: {
    marginVertical: SIZES.padding,
    marginHorizontal: SIZES.padding * 1.5,
    height: 50,
  },
  itemSection: {
    flexDirection: 'row',
  },
  checkboxItem: {
    marginRight: SIZES.padding * 2,
    width: 20,
    height: 20,
    fontWeight: '600',
    marginTop: 2,
  },
  itemButtonDetele: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.drakRed,
    borderRadius: SIZES.radius / 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.padding / 2,
  },
  leftItemInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: SIZES.padding * 5,
  },
  itemName: {fontWeight: '400', ...FONTS.body3},
  itemStatus: {...FONTS.body4},
  itemButtonText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
  bottomContainer: {
    marginHorizontal: SIZES.padding * 2,
    marginTop: SIZES.padding * 2,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.padding * 2,
  },
  buttonContainer: {
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius / 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    marginRight: SIZES.padding,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
  },
  buttonText: {
    color: COLORS.black,
    ...FONTS.h4,
  },
  filterText: {
    marginRight: SIZES.padding,
    ...FONTS.h4,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 30,
    ...FONTS.body3,
  },
});
export default styles;
