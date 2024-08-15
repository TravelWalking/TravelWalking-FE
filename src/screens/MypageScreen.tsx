import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MypageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*<View style={styles.headerTop}>
          <Text style={styles.headerTitle}>마이페이지</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>50P</Text>
          </View>
        </View>*/}
        <Text style={styles.headerSubtitle}>00 님</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>#맛집 주변</Text>
          <Text style={styles.tag}>#호수</Text>
          <Text style={styles.tag}>#공원</Text>
          <Text style={styles.tag}>#건대입구</Text>
        </View>
        <Text style={styles.statusMessage}>건대 근처에서 주로 산책을 즐겨요 :)</Text>
      </View>

      <TouchableOpacity style={styles.pointButton}>
        <Text style={styles.pointButtonText}>포인트 활용 방법 알아보기</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.group}>
          <Text style={styles.sectionTitle}>Feed</Text>
          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.buttonText}>내 스크랩 목록</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.buttonText}>내가 작성한 게시글</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.buttonText}>내가 작성한 댓글</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.buttonText}>나의 친구 현황</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.listButton, styles.withdrawButton]}>
          <Text style={styles.buttonText}>서비스 탈퇴하기</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  pointsContainer: {
    backgroundColor: '#e6e6ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a5acd',
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  tag: {
    backgroundColor: '#9391E5',
    borderWidth: 1.5,
    borderColor: '#2B2972',
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 5,
    fontSize: 10,
  },
  statusMessage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  pointButton: {
    backgroundColor: '#2B2972',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 1,
  },
  pointButtonText: {
    fontSize: 12.5,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    elevation: 1,
  },
  group: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10,
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
  withdrawButton: {
    backgroundColor: '#fff6f6',
    borderColor: '#ffd6d6',
    marginTop: 20,
  },
});

export default MypageScreen;