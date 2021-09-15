import * as React from "react";
import {
  Image,
  Flex,
  Center
} from 'native-base';
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { TextInput } from "../components/common/Inputs/InputField"
import { StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font'

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    'SF-Pro-Text': require("../assets/fonts/SF-Pro-Text-Regular.otf")
  })
  return (
    <View style={styles.container}>
      <Center style={styles.centerstyle}>
        <Image 
        source={require("../assets/images/Logo.png")} style={{width: 183, height: 52}}
        alt="Sandbox-Logo"/>
          {/* Insert Logo Here? */}
          {/* <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Welcome to the RCFTA Sandbox App</Text> */}
          
          <View style={styles.inputLoginContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput 
                  style={styles.emailInputSection}
                  placeholder="john.doe@gmail.com"
                  autoCompleteType='email'/> 
              <Text style={styles.label}>Password</Text>
              <TextInput
                  style={styles.passwordInputSection}
                  secureTextEntry={true}
                  placeholder="your password here"
                  autoCompleteType='password'/>
            </View>
            <View style={styles.loginContainer}>
              <TouchableOpacity
              style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Log In</Text> 
              </TouchableOpacity>
            </View>
          </View>    
            
            
            
            <View style={styles.accountHelpContainer}>
              <Flex direction="vertical">
                 <View style={styles.dontHaveAccountContainer}>
                  <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
                </View>
                <View style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>
              </Flex>
            </View>
          
          
          <View style={styles.infoContainer}>
            <Text style={styles.about}>
              The Rotman Commerce Fintech Association is a student-run club{"\n"} 
              seeking to educate students about the vast array of financial{"\n"}
              technologies available, as well as the implementation of these{"\n"}
              technologies to solve financial problems.{"\n"} 
            </Text>
            <Text style={styles.info}>Learn more about us</Text>
          </View>
          
          {/* <EditScreenInfo path="/screens/LoginScreen.tsx" /> */}
          </Center>
        </View>
    
  );
}

const styles = StyleSheet.create({
  centerstyle: {
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  label: {
    fontStyle: "normal",
    fontFamily: "SF-Pro-Text",
    fontSize: 7,
    opacity: 0.7
  },
  inputContainer: {
    width: "95%",
    flex: 2,
    backgroundColor: "black"
  },
  loginContainer: {
    width: "95%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  inputLoginContainer: {
    width: "95%",
    backgroundColor: "black"
  },
  accountHelpContainer: {
    backgroundColor: "black",
    width: "95%",
    flex: 2,
    flexDirection: "row",
  },
  dontHaveAccountContainer: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black"
  },
  forgotPasswordContainer: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black"
  },
  infoContainer: {
    width: "95%",
    flex: 1,
    backgroundColor: "black"
  },
  // learnMoreContainer: {
  //   width: "95%",
  //   flex: 1,
  //   backgroundColor: "black"
  // },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "left",
    color: "#52ccad"
  },
  subtitle: {
    fontSize: 20,
    color: '#52ccad'
  },
  loginText: {
    fontSize: 14,
    fontWeight: "600"
  },
  emailInputSection: {
    fontSize: 12,
    border: "1px solid black",
    borderRadius: 5,
    textAlign: "left",
    paddingTop: "5.5px",
    paddingLeft: "6px",
    fontWeight: "600",
    marginVertical: "5px"
  },
  passwordInputSection: {
    fontSize: 12,
    border: "1px solid black",
    borderRadius: 5,
    textAlign: "left",
    paddingTop: "7px",
    paddingLeft: "6px",
    fontWeight: "600",
    marginVertical: "5px"
  },
  loginBtn: {
    backgroundColor: "#298866",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10px"
  },
  dontHaveAccount: {
    fontSize: 7,
    fontStyle: "normal",
    fontFamily: "SF-Pro-Text",
    display: "flex",
    textAlign: "left",
    opacity: 0.7
  },
  forgotPassword: {
    fontSize: 7,
    fontStyle: "normal",
    fontFamily: "SF-Pro-Text",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    opacity: 0.7,
  },
  about: {
    fontSize: 5,
    fontStyle: "normal",
    fontFamily: "SF-Pro-Text",
    textAlign: "left",
    opacity: 0.7,
    paddingBottom: "5.5px"
  },
  info: {
    fontSize: 5,
    fontStyle: "normal",
    fontFamily: "SF-Pro-Text",
    textAlign: "left",
    opacity: 0.7,
    paddingBottom: "5.5px",
    textDecorationLine: "underline",
  },                  
});