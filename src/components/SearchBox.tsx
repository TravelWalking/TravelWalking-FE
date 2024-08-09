import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IcSearch from '../assets/icon/ic_search.svg';

const SearchBox = () => {
    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder="장소를 입력하세요."
            />
            <TouchableOpacity style = {styles.searchButton}>
                <IcSearch width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.menuButton}>
                {/* //햄버거 */}
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc', 
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchButton: {
        marginLeft: 10,
    },
    menuButton: {
        marginLeft: 10,
    },

});

export default SearchBox;