import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/_mainstyle"; // Import your landing page styles
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/download.jpeg")} // replace with your background
      style={styles.backgroundImageContainer}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.titleText}>Welcome</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleSubText}>Join us and explore amazing features</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => navigation.navigate("signin")}
          >
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => navigation.navigate("join")}
          >
            <Text style={styles.buttonSecondaryText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;
