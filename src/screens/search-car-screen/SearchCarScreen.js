import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewContainer, InputForm, DatePicker, Button } from 'Components';
import { NavigationType } from 'types';
import { scaleVer } from 'Constants/dimensions';

type PropTypes = {
  navigation: NavigationType,
};

const SearchCarScreen = () => {
  const onBackPress = () => {};
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChangeDate = (type, date) => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <ViewContainer haveBackHeader title="Search Car" backAction={onBackPress}>
      <View style={{ flex: 1 }}>
        <InputForm
          label="Pick up hub location"
          placeholder="Enter location"
          containerStyle={styles.input}
        />
        <InputForm
          label="Pick up hub location"
          placeholder="Enter location"
          containerStyle={styles.input}
        />
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onChangeDate={handleChangeDate}
        />
      </View>

      <Button label="Search" />
    </ViewContainer>
  );
};

export default SearchCarScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: scaleVer(32),
  },
});