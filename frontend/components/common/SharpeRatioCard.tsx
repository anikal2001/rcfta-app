import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../Themed";

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    textShadowColor: "black",
    
  },
  card: {
    backgroundColor: "#1A9386",
    padding: 50,
    borderRadius: 13,
    borderWidth: 2.5,
    borderColor: "#1E7E74",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 7.5,
  },
  cardRow: {
    backgroundColor: "#1A9386",
    flexDirection: "row",
  },
  cardLeft: {
    backgroundColor: "red",
    borderRadius: 7.5,
    width: "178px",
    height: "70px",
  },
  cardRight: {
    fontSize: 50,
    fontWeight: "600",
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    textShadowColor: "black",

  },
});

const card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>SHARPE RATIO</Text>
      <View style={styles.cardRow}>
        <Text style={styles.cardRight}>-$733,836.04</Text>
        {/* <Image source={require("../assets/images/favicon.png")} /> */}
      </View>
    </View>
  );
};

export default card;
