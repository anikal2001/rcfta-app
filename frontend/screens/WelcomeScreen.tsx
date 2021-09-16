import Navigation from "navigation";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import {
	StyleSheet,
	Image,
	Dimensions,
	Linking,
	TouchableOpacity,
} from "react-native";

import { Text, View } from "../components/Themed";
const logo = require("../assets/images/sandbox-logo-dark.png");
const graph = require("../assets/images/chart-silhoutte.png");

function HandleHelpPress() {
	Linking.openURL("https://rcfta.ca");
}

export default function Welcome({navigation}) {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo}/>
			<Text>Paper-trading and finance research at your fingertips.</Text>
			<Image source={graph} style={styles.silhouette} />

			<TouchableOpacity 
        style = {styles.startButton}
        onPress={() => navigation.push("BottomTabNavigator")}
      >
				<Text
					style={{ textAlign: "center", paddingLeft: 10, paddingRight: 10 }}
				>
					Get Started
				</Text>
			</TouchableOpacity>
			<Text style={styles.description}>
				The Rotman Commerce Fintech Assosiation is a student-run club seeking to
				educate students about the vast array of financial technologies
				available, as well as the implementation of these technologies to solve
				financial problems.
			</Text>
			<Text onPress={() => HandleHelpPress()} style={styles.rcftaLink}>
				Learn More About Us
			</Text>
		</View>
	);
}

var { width } = Dimensions.get("window");
var { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		marginTop: "15%",
		alignItems: "center",

	},
  logo: {
    alignItems: 'stretch',

    width: width,
    height: height,
    maxHeight: 72,
    maxWidth: 300,
  },

  silhouette: {
    alignItems: "center",
    marginTop: "5%",
    width: width,
    height: height,
    maxHeight: 385,
    maxWidth: 400,
  },
  startButton: {
    justifyContent: "center",

    backgroundColor: "#124a36",
    borderRadius: 180,
    height: 25,
    width: 100,
    marginTop: "2%",
    // marginRight: "25%",
    // marginLeft: "25%",
  },
	description: {
		textAlign: "left",
		marginTop: "4%",
    marginLeft: "20%",
    marginRight: "20%"

	},
	rcftaLink: {
		textAlign: "left",
		textDecorationLine: "underline",
		marginTop: "2%",
	},
});
