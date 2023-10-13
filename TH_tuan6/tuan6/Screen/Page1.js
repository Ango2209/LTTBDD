import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
  } from "react-native";
  import React, { useCallback, useEffect, useState } from "react";
  import { StatusBar } from "expo-status-bar";
  import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
  
  
  
  export default function Page1() {
    return (
      <SafeAreaView>

     
      <View style={styles.voucherScreen}>
        <View style={{flex:""}}>
            <Image style={{width:"300px",height:"350px",resizeMode:"contain"}} source={require("../../tuan6/assets/vs_blue.png")}/>
        </View>
        <View style={{flex:""}}>
           <Text>Dien thoai vsmart hang chinh hang</Text>
        </View>
      </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    voucherScreen: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      // justifyContent: "space-around",
      // marginBottom: 50,
    },
  });
  