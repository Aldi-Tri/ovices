import * as React from 'react';
import {Text, FlatList, TextInput, StyleSheet, View, Button} from 'react-native';
import colors from '../assets/colors/colors';
//import fonts from '../assets/fonts';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';

Feather.loadFont;

export default HomePasien = () =>{
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.icons}> 
                    <View style={styles.search}>
                        <Feather name='search' size={17} color='#9F9B8F'/>
                        <TextInput placeholder='search' placeholderTextColor='#9F9B8F'/>
                    </View>
                    <View>
                        <Feather name='menu' size={17} color='#9F9B8F'/>
                    </View>
                </View>
                <View>
                    <Text style={styles.judul}>Riwayat Makan</Text>
                </View>
            </View>
            <ScrollView>
            </ScrollView>
        </View>
    );
};

const styles =StyleSheet.create({
    header:{
        backgroundColor: '#2D2D2D',
        height: 147,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        marginLeft: 27,
        marginRight: 27,
        alignItems: 'center',
    },
    search:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    judul:{
        color: '#9F9B8F',
        fontSize: 30,  
        marginLeft: 27,
        marginBottom: 25,
    },
});