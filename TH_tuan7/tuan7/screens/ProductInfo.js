import { View ,Image,StyleSheet} from "react-native";

const ProductInfo=()=>{
  return <View style={styles.container}>
   <Image   style={{ resizeMode: "contain", height: 200, width: 250 }}
            source={require('../assets/xe2.png')}
    />
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
export default ProductInfo;