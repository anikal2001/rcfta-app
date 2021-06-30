import * as React from "react";
import { StyleSheet, Button} from "react-native";
import { TextInput} from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View} from "../components/Themed";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        {/* Insert Logo Here? */}
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome to the RCFTA Sandbox App</Text>
        <TextInput 
            style={styles.inputSection}
            placeholder="your.name@gmail.com"
            autoCompleteType='email'/> 
        <TextInput
            style={styles.inputSection}
            secureTextEntry={true}
            placeholder="Password"
            autoCompleteType='password'/>
        <Button
        onPress={() => console.log('TODO. Add Action')}
        title="Submit"
        color="#52ccad"
        />
        <EditScreenInfo path="/screens/LoginScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2b2b"
  },
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
  inputSection: {
    fontSize: 25,
    backgroundColor: "#52ccad"
  },
  submit: {

  }
});
