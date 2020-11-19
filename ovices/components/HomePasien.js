import * as React from 'react';
import {Text, FlatList, TextInput, StyleSheet, View, Button} from 'react-native';
import colors from '../assets/colors/colors';
//import fonts from '../assets/fonts';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

Feather.loadFont;
MaterialCommunityIcons.loadFont;

export default HomePasien = () =>{
    return (
        <View style={styles.background}>
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
                <View style={styles.dataWrapper}>
                    <View style={styles.dateTime}>
                        <Text style={styles.timeText}>8 a.m.</Text>
                        <Text style={styles.dateText}>10 nov</Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.makananText}>Nazi Goyeng</Text>
                        <Text style={styles.deskripsiText}>Aman, Mengandung nasi</Text>
                    </View>
                </View>
                <View style={styles.dataWrapper}>
                    <View style={styles.dateTime}>
                        <Text style={styles.timeText}>8 a.m.</Text>
                        <Text style={styles.dateText}>10 nov</Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.makananText}>Nazi Goyeng</Text>
                        <Text style={styles.deskripsiText}>Aman, Mengandung nasi</Text>
                    </View>
                </View>
                <View style={styles.dataWrapper}>
                    <View style={styles.dateTime}>
                        <Text style={styles.timeText}>8 a.m.</Text>
                        <Text style={styles.dateText}>10 nov</Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.makananText}>Nazi Goyeng</Text>
                        <Text style={styles.deskripsiText}>Aman, Mengandung nasi</Text>
                    </View>
                </View>
                <View style={styles.dataWrapper}>
                    <View style={styles.dateTime}>
                        <Text style={styles.timeText}>8 a.m.</Text>
                        <Text style={styles.dateText}>10 nov</Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.makananText}>Nazi Goyeng</Text>
                        <Text style={styles.deskripsiText}>Aman, Mengandung nasi</Text>
                    </View>
                </View>
                <View style={styles.dataWrapper}>
                    <View style={styles.dateTime}>
                        <Text style={styles.timeText}>8 a.m.</Text>
                        <Text style={styles.dateText}>10 nov</Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.makananText}>Nazi Goyeng</Text>
                        <Text style={styles.deskripsiText}>Aman, Mengandung nasi</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.plus}>
                        <Feather name='plus-circle' size={35} color='#9F9B8F'/>
            </View>
            <View style={styles.footer}> 
                <Feather name='home' size={17} color='#9F9B8F'/>
                <MaterialCommunityIcons name='account' size={17} color='#9F9B8F'/>
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    background:{
        backgroundColor: '#161616',
        flex: 1,

    },
    header:{
        backgroundColor: '#2D2D2D',
        height: 147,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
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
    dataWrapper:{
        flexDirection: 'row',
        marginLeft: 27,
        marginRight: 27,
        marginTop: 10,
        marginBottom: 10,
    },
    dateTime:{

    },
    timeText:{
        color: '#A2A19F',
    },
    dateText:{
        color: '#A2A19F',
    },
    food:{
        marginLeft: 20,
        borderRadius: 2,
        backgroundColor: '#2D2D2D',
    },
    makananText:{
        color: '#A2A19F',
    },
    deskripsiText:{
        color: '#A2A19F',
    },
    plus:{
        flexDirection:'row-reverse',
        marginLeft: 27,
        marginRight: 27,
        marginBottom: 30,
    },
    footer:{
        marginHorizontal: 75,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});