import { View, Image, StyleSheet } from "react-native";
const listProduct = [{
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}, {
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}, {
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}, {
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}, {
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}, {
    image: require("../assets/xe2.png"),
    name: "Pinarello"
}]
const ListProducts = () => {
  
    return <View style={styles.container}>
       <View style={{flex:2}}>
        {/* <Image key={index} style={{ resizeMode: "contain", height: 200, width: 250 }}
            source={require('../assets/xe5.png')}/> */}
        {listProduct.map((item, index) => {
            const image=item.image
            return <Image style={{ resizeMode: "contain", height: 200, width: 50 }}
            source={image}
            />
        })}
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'space-around',
    },
});
export default ListProducts;