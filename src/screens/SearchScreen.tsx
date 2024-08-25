// SearchScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import SearchBox from '../components/SearchBox';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
    <View>
      <Text>검색어를 입력하세요.</Text>
      <SearchBox/>
      <Text>최근 검색어</Text>
      <ScrollView></ScrollView>
      
      
    </View>
  );
};

export default SearchScreen;
