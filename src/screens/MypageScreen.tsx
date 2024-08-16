import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Image } from 'react-native';

function MypageScreen() {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalVisible(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalVisible(false);
  };

  const openCompleteModal = () => {
    setIsConfirmModalVisible(false);
    setIsCompleteModalVisible(true);
  };

  const closeCompleteModal = () => {
    setIsCompleteModalVisible(false);
  };

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

        {/* 오른쪽 상단에 편집 버튼과 이미지 추가 */}
        <View style={styles.rightHeaderContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>편집</Text>
          </TouchableOpacity>
          <Image source={require('../assets/images/Mypage/totalPoint.png')} style={styles.totalPointImage} />
        </View>
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
        <TouchableOpacity style={[styles.listBox, styles.lastListBox]} onPress={openConfirmModal}>
          <Text style={styles.buttonText}>서비스 탈퇴하기</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* 탈퇴 확인 모달 */}
      <Modal
        transparent={true}
        visible={isConfirmModalVisible}
        animationType="none"
        onRequestClose={closeConfirmModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={closeConfirmModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <Text style={styles.modalTitle}> </Text>
            <Text style={styles.modalTitle}> </Text>
            <Text style={styles.modalTitle}>서비스 회원을</Text>
            <Text style={styles.modalTitle}>탈퇴하시겠습니까?</Text>
            <Text style={styles.modalTitle}> </Text>
            <TouchableOpacity style={styles.confirmButton} onPress={openCompleteModal}>
              <Text style={styles.confirmButtonText}>탈퇴할래요</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 탈퇴 완료 모달 */}
      <Modal
        transparent={true}
        visible={isCompleteModalVisible}
        animationType="none"
        onRequestClose={closeCompleteModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={closeCompleteModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <Text style={styles.modalSubtitle}> </Text>
            <Text style={styles.modalSubtitle}>서비스 회원 탈퇴가 완료되었어요.</Text>
            <Text style={styles.modalSubtitle}>사용자님과 곧 다시 만날 날을</Text>
            <Text style={styles.modalSubtitle}>기다리고 있을게요 😢</Text>
            <Text style={styles.modalSubtitle}> </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff', // 수정: 흰색 배경
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  rightHeaderContainer: {
    position: 'absolute',
    top: 10,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  editButton: {
    marginRight: 25, // 이미지와 버튼 간격
    marginTop: -35,   // 버튼을 위로 이동 (값을 원하는 대로 조정)
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    backgroundColor: '#F5F6F8',
  },
  
  editButtonText: {
    fontSize: 12,
    color: '#000000',
    margin: 1.2,
  },
  
  totalPointImage: {
    width: 75,  // 이미지 너비
    height: 75, // 이미지 높이
    resizeMode: 'contain', // 이미지 크기 조정
    marginRight: 10,
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
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    borderColor: '#CBCBCB',
    borderWidth: 0.9,
    marginHorizontal: 20,
    marginBottom: 25,
    marginVertical: 15,
  },
  box: {
    backgroundColor: '#F5F6F8',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginHorizontal: 20,
  },
  listBox: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
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
    height: 20,
  },
  sectionTitle: {
    fontSize: 16.5,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  confirmButton: {
    backgroundColor: '#2B2972',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default MypageScreen;
