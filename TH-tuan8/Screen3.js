import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
const Screen3 = () => {
    return <View>
        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: 30 }}>
            <Pressable onPress={() => navigation.navigate("Screen1")} style={style.Header}>
                <Image source={require('./assets/back.png')} style={style.iconArrow}></Image>
            </Pressable>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                    <Image style={{ height: "50px", width: "50px" }} source={require("./assets/Rectangle.png")} />
                </View>
                <View>

                    <h2 style={{ margin: 0 }}>Hi Twinkle</h2>
                    <p style={{ margin: 0 }}>Have a great day ahead</p>
                </View>

            </View>
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
            <h1>ADD YOUR JOB</h1>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                border: '1px solid black',
                borderRadius: 2,
                width: '80%',
                height: 50,
                alignItems: "center"
            }}>
                <Image source={require('./assets/iconMail.png')} style={{ width: 20, height: 20, marginRight: 10, marginLeft: 10 }} />
                <TextInput style={style.InputName} placeholder='Search' />
            </View>
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:"50px",}}>
            <Pressable style={{ borderRadius:"50px",height:"50px",width:"130px",backgroundColor:"green",alignItems:"center",justifyContent:"center"}}>
                Finish
            </Pressable>
        </View>
    </View>
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
export default Screen3