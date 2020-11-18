import * as React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
//import fonts from '../assets/fonts';

export default LoginPasien = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome !</Text>
            <View style={styles.email}>
                <Text style={styles.emailText}>Email</Text>
            </View>
            <View style={styles.password}>
                <Text style={styles.passwordText}>Password</Text>
            </View>
            <View style={styles.sebagai}>
                <Text style={styles.sebagaiText}>Masuk sebagai </Text>
                <Text style={styles.dokterText}>Dokter</Text>
            </View>
            <View style={styles.masuk}>
            <Button style={styles}
                //onPress={}
                title="Masuk"
                color="#161616"
            />
            </View>
            <View style={styles.register}>
            <Button style={styles}
                //onPress={}
                title="Register"
                color="#EFEFEF"
            />
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome:{
        //fontFamily: 'Quattrocento-Regular',
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
    emailText:{
        fontSize: 12,
        paddingBottom: 10,
    },
    password:{
        marginRight: 53,
        marginTop: 50,
        marginLeft: 53,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    passwordText:{
        fontSize: 12,
        paddingBottom: 10,
    },
    sebagai:{
        flexDirection: 'row',
        marginLeft: 53,
        paddingTop: 10,
    },
    sebagaiText:{
        color: '#A2A19F',
        //fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    dokterText:{
        fontSize: 12,
        //fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    masuk:{
        marginHorizontal: 48,
        paddingTop: 48,
    },
    register:{
        marginHorizontal: 48,
        paddingTop: 20,
    },
});