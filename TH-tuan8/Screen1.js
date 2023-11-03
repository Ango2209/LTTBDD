import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Screen1({navigation}){
    return (
        <View style={style.container}>
            <View style={style.BoxTitle}>
                <Text style={style.Title}>Manage Your<br/>Task</Text>
            </View>

            <View style={style.BoxInputName}>
                    <Image source={require('./assets/iconMail.png')} style={{width: 20, height: 20, marginRight: 10, marginLeft: 10}}/>
                    <TextInput style={style.InputName} placeholder='Enter Your Name'/>
            </View>

            <View style={style.BoxButtonStarted}>
                <TouchableOpacity style={style.ButtonStarted} onPress={() => navigation.navigate("Screen2")}>
                    <Text style={style.TextButtonStarted}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },

    BoxTitle: {
        width: '100%',
        alignItems: 'center',

    },

    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8353E2',
        textAlign: 'center',
        marginTop: 100,
    },

    BoxInputName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 100,
        border: '1px solid black',
        borderRadius: 2,
        width: '80%',
        height: 50,
        
    },

    InputName: {
        color: '#BCC1CA',

    }, 

    ButtonStarted: {
        marginTop: 100,
        backgroundColor: '#00Bdd6',
        borderRadius: 20,
        width: 180,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    TextButtonStarted: {
        color: 'white',
        fontWeight: 'bold',
    },
});