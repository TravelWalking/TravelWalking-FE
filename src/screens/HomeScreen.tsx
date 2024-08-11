import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from '../components/Dropdown';

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState('지도로 보기');

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </View>
      {/* 선택된 옵션에 따라 다른 컴포넌트 렌더링 */}
      {selectedOption === '지도로 보기' && <MapView />}
      {selectedOption === '피드로 보기' && <FeedView />}
    </View>
  );
};

const MapView = () => {
  return (
    <View style={styles.content}>
      <Text>여기에 지도 화면이 표시됩니다.</Text>
    </View>
  );
};

const FeedView = () => {
  return (
    <View style={styles.content}>
      <Text>여기에 피드 화면이 표시됩니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default HomeScreen;
