import * as React from 'react';
import {ScrollView, TextInput, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
//import fonts from '../assets/fonts';

export default LoginPasien = () =>{
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome !</Text>
            <View style={styles.email}>
                <TextInput placeholder='Email'/>
            </View>
            <View style={styles.password}>
                <TextInput placeholder='Password' secureTextEntry={true}/>
            </View>
            <View style={styles.sebagai}>
                <Text style={styles.sebagaiText}>Login sebagai </Text>
                <TouchableOpacity>
                    <Text style={styles.dokterText}>Dokter</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.register}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome:{
        fontFamily: 'Quattrocento-Regular',
        fontSize: 30,
        marginTop: 147,
        marginLeft: 53,
    },
    email:{
        marginRight: 53,
        marginTop: 120,
        marginLeft: 53,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    password:{
        marginRight: 53,
        marginTop: 5,
        marginLeft: 53,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    sebagai:{
        flexDirection: 'row',
        marginLeft: 53,
        paddingTop: 10,
    },
    sebagaiText:{
        color: '#A2A19F',
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    dokterText:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    login:{
        marginTop: 28,
        marginHorizontal: 78,
        backgroundColor: '#161616',
        borderRadius: 15,
    },
    loginText:{
        color: '#A2A19F',
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        marginBottom: 10,
        marginTop: 10,
    },
    register:{
        marginTop: 18,
        marginHorizontal: 78,
        borderRadius: 15,
        borderColor: '#161616',
        borderWidth: 1,
    },
    registerText:{
        color: '#161616',
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        marginBottom: 10,
        marginTop: 10,
    }, 
});