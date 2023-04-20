import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

export default class CreatePost extends Component {
  render() {
    if(!this.state.fontsLoaded){
      return<AppLoading/>;
    } else{
      let preview_images = {
        "image_1": require("../assets/image_1.jpg")
        "image_2": require("../assets/image_2.jpg")
        "image_3": require("../assets/image_3.jpg")
        "image_4": require("../assets/image_4.jpg")
        "image_5": require("../assets/image_5.jpg")
        "image_6": require("../assets/image_6.jpg")
        "image_7": require("../assets/image_7.jpg")
      }
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
                source={require("../assets/logo.png") }
                style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
      </View>
    );
  }
}