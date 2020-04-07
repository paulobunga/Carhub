import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { ViewContainer, InputForm, ListItem, Button } from 'Components';
import { textStyle } from 'Constants/textStyles';
import { NavigationType, CarType, UserType } from 'types';
import { scaleHor, scaleVer } from 'Constants/dimensions';
import { shadowStyle } from 'Constants';
import colors from 'Constants/colors';
import { SearchBar, Icon } from 'react-native-elements';

import {
  checkCarByVin,
  getCustomerPreviousCarList,
} from '@redux/actions/lease';
import CarItem from './CarItem';

type PropTypes = () => {
  navigation: NavigationType,
  listPreviousCar: [CarType],
};

const HostListCarScreen = ({ navigation, listPreviousCar }: PropTypes) => {
  const onPressBack = () => {
    navigation.pop();
  };
  const updateSearch = () => {};
  const clearSearch = () => {};

  const keyExtractor = (item, index) => index;
  const renderItem = ({ item, index }) => (
    <CarItem data={{ ...item, navigation }} />
  );

  return (
    <ViewContainer haveBackHeader title="Car list" onBackPress={onPressBack}>
      {/* <SearchBar
        // inputStyle={{ backgroundColor: 'white' }}
        containerStyle={styles.container}
        platform="android"
        onChangeText={updateSearch}
        onClearText={clearSearch}
        placeholder="Car name..."
      /> */}
      <FlatList
        data={listPreviousCar}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    height: scaleVer(60),
    borderColor: colors.dark80,
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default connect(
  state => ({
    listPreviousCar: state.lease.listPreviousCar,
    loading: state.lease.loading,
    user: state.user,
  }),
  { checkCarByVin, getCustomerPreviousCarList }
)(HostListCarScreen);