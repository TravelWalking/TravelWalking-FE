import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Dropdown from '../components/Dropdown';
import FeedView from './FeedView';

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState('지도로 보기');

  return (
    <View style={styles.container}>
      {selectedOption === '지도로 보기' && <MapView />}
      {selectedOption === '피드로 보기' && <FeedView />}
      
      <View style={styles.dropdownContainer}>
        <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </View>
      <TouchableOpacity style={styles.fixedButton}>
        <Text style={styles.buttonText}>기록 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const MapView = () => {
  return (
    <View style={styles.mapView}>
      <Text>지도 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 10,  // 다른 뷰들보다 위에 오도록 설정
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,  // 전체 화면을 채우도록 설정
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',  // 예시로 배경색 설정
  },
  feedView: {
    ...StyleSheet.absoluteFillObject,  // 전체 화면을 채우도록 설정
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce4ec',  // 예시로 배경색 설정
  },
  fixedButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#DAE628',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
