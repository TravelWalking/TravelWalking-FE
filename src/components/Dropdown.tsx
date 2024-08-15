import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DropdownProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ selectedOption, setSelectedOption }) => {
  const [isDropdownVisible, setDropdownVisible] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  const getDropdownOptions = () => {
    if (selectedOption === '지도로 보기') {
      return (
        <TouchableOpacity style={styles.dropdownOption} onPress={() => selectOption('피드로 보기')}>
          <Text style={styles.optionText}>피드로 보기</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.dropdownOption} onPress={() => selectOption('지도로 보기')}>
          <Text style={styles.optionText}>지도로 보기</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          isDropdownVisible ? styles.buttonActive : styles.buttonInactive
        ]}
        onPress={toggleDropdown}
      >
        <Text style={styles.buttonText}>{selectedOption}</Text>
        <Text style={styles.arrow}>{isDropdownVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {getDropdownOptions()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginLeft: 10,
        zIndex: 1,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f0f0f0',
    },
    buttonActive: {
        borderBottomLeftRadius: 0,  
        borderBottomRightRadius: 0, 
        borderTopLeftRadius: 10,    
        borderTopRightRadius: 10,   
    },
    buttonInactive: {
        borderRadius: 10, 
    },
    buttonText: {
        marginRight: 10,
        fontSize: 10,
        color: '#333',
    },
    arrow: {
        fontSize: 14,
        color: '#333',
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: '#ccc',
        borderBottomLeftRadius: 10,  // 드롭다운 하단 모서리 둥글게
        borderBottomRightRadius: 10, // 드롭다운 하단 모서리 둥글게
        backgroundColor: '#fff',
        zIndex: 2,
    },
    dropdownOption: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 10,
        color: '#333',
    },
});

export default Dropdown;