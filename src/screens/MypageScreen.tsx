import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MypageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>마이페이지</Text>
        <Text style={styles.headerSubtitle}>00님</Text>
        <Text style={styles.statusMessage}>건대 근처에서 주로 산책을 즐겨요 :)</Text>
      </View>

      <TouchableOpacity style={styles.pointButton}>
        <Text style={styles.pointButtonText}>포인트 활용 방법 알아보기</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.group}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Feed</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>내 스크랩 목록</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>내가 작성한 게시글</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>내가 작성한 댓글</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>나의 친구 현황</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button, styles.withdrawButton]}>
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
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  statusMessage: {
    fontSize: 14,
    color: '#555',
  },
  pointButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  pointButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  group: {
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
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
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
});

export default MypageScreen;
