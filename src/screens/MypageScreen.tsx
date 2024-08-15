import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MypageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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

      {/* 구분선 추가 */}
      <View style={styles.separator} />

      {/* 첫번째 박스: Feed */}
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Feed</Text>
        <TouchableOpacity style={[styles.listBox, styles.firstListBox]}>
          <Text style={styles.buttonText}>내 스크랩 목록</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listBox}>
          <Text style={styles.buttonText}>내가 작성한 게시글</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listBox}>
          <Text style={styles.buttonText}>내가 작성한 댓글</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.listBox, styles.lastListBox]}>
          <Text style={styles.buttonText}>나의 친구 현황</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Box 간격 */}
      <View style={styles.spacing} />

      {/* 두번째 박스: 서비스 탈퇴하기 */}
      <View style={styles.box}>
        <TouchableOpacity style={[styles.listBox, styles.lastListBox]}>
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
  headerSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 10,
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
    fontWeight: 'bold',
  },

  // 구분선 스타일 추가
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
    marginBottom: 25,
    marginVertical: 15,  // 구분선 위아래로 15px 공백 추가
  },

  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 20,
  },
  listBox: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstListBox: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lastListBox: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomWidth: 0,
  },
  spacing: {
    height: 15, // Box 사이 간격
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
});

export default MypageScreen;