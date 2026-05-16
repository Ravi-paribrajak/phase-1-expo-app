import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Link href="/" style={styles.buttons}>Go to Home Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#fff'
  },
  buttons: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'red'
  },
});
