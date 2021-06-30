import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../components/Themed";

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: "#30D5C8",
    padding: 75,
  },
  cardRow: {
    backgroundColor: "#30D5C8",
    flexDirection: "row",
  },
  cardLeft: {
    backgroundColor: "red",
    borderRadius: 100,
    width: "200px",
    height: "200px",
  },
  cardRight: {
    fontSize: 30,
    fontFamily: "Times New Roman",
  },
});

const card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <View style={styles.cardRow}>
        <Text style={styles.cardRight}>Content of the Card</Text>
        <Image source={require("../assets/images/favicon.png")} />
      </View>
    </View>
  );
};

export default card;
