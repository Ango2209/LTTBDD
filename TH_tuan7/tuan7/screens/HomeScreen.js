import { Pressable } from "react-native";
import {
    View,
    Text,
    StyleSheet, Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: "20px", width: "100%" }}>
                <Text  >
                    A Premium online store for </Text>
                <Text>
                    sporter and their stylish choice
                </Text>

            </View>
            <View >
                <Image
                    style={{ resizeMode: "contain", height: 200, width: 250 }}
                    source={require('../assets/xe1.png')}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: "20px", width: "100%", fontSize: "30px", }}>
                <Text  >
                    Power Bike </Text>
                <Text>
                    Shop
                </Text>

            </View>
            <Pressable onPress={()=>navigation.navigate("Info")} style={{ borderRadius: 120, backgroundColor: "orange", width: "80%", alignItems: "center", height: 60, justifyContent: "center", fontSize: 20, color: "white" }}>
                Get Started
            </Pressable>
            <Pressable onPress={()=>navigation.navigate("List")} style={{ borderRadius: 120, backgroundColor: "orange", width: "80%", alignItems: "center", height: 60, justifyContent: "center", fontSize: 20, color: "white" }}>
                List
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'space-around',
    },
});
export default HomeScreen;