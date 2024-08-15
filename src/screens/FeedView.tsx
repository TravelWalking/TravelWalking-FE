import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FeedView = () => {
  const [selectedRegion, setSelectedRegion] = useState('경기');
  const [selectedSubRegion, setSelectedSubRegion] = useState('강남');

  const regions = ['경기', '서울', '인천', '강원', '대전/충청', '대구', '부산/울산'];
  const subRegions = ['강남', '강변', '건대입구', '구로', '대학로', '청량리역입구', '등촌'];


  return (
    <View style={styles.feedView}>
      <View style={styles.regionContainer}>
        {regions.map((region) => (
          <TouchableOpacity
            key={region}
            style={[
              styles.regionButton,
              selectedRegion === region && styles.selectedRegionButton
            ]}
            onPress={() => setSelectedRegion(region)}
          >
            <Text style={[
              styles.regionText,
              selectedRegion === region && styles.selectedRegionText
            ]}>
              {region}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sub Region Bar */}
      <View style={styles.subRegionWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.subRegionContainer}>
            {subRegions.map((subRegion) => (
            <TouchableOpacity
                key={subRegion}
                style={[
                styles.subRegionButton,
                selectedSubRegion === subRegion && styles.selectedSubRegionButton
                ]}
                onPress={() => setSelectedSubRegion(subRegion)}
            >
                <Text style={[
                styles.subRegionText,
                selectedSubRegion === subRegion && styles.selectedSubRegionText
                ]}>
                {subRegion}
                </Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>


      <View style={styles.content}>
        <Text>{selectedRegion}의 콘텐츠</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedView: {
    flex: 1,
    backgroundColor: '#fae888',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regionContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    alignSelf: 'center',

  },
  regionButton: {
    marginVertical: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 5, 
  },
  selectedRegionButton: {
    backgroundColor: '#2B2972',
  },
  regionText: {
    fontSize: 10,
    color: '#000',
  },
  selectedRegionText: {
    color: '#fff',
    fontWeight: 700,
  },
  subRegionWrapper: {
    height: 40,
    marginVertical: 5,
  },
  subRegionContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  subRegionButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedSubRegionButton: {
    backgroundColor: '#2B2972',
    borderColor: '#2B2972',
  },
  subRegionText: {
    fontSize: 10,
    color: '#000',
  },
  selectedSubRegionText: {
    color: '#fff',
    fontWeight: 700,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedView;
