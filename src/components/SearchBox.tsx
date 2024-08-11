import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IcSearch from '../assets/icon/ic_search.svg';
import IcHambuger from '../assets/icon/ic_hamburger.svg';

const SearchBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="장소를 입력하세요."
                />
                <TouchableOpacity style={styles.searchButton}>
                    <IcSearch width={24} height={24} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.menuButton}>
                <IcHambuger width={30} height={30}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    searchButton: {
        padding: 10,
    },
    menuButton: {
        marginLeft: 10,
    },
});

export default SearchBox;
