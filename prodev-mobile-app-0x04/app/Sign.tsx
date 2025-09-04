import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle"; // Import SignIn/Join shared styles
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Access your account</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text
        style={styles.forgotPasswordText}
        onPress={() => console.log("Forgot password")}
      >
        Forgot Password?
      </Text>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => navigation.navigate("join")}
        >
          Join
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
