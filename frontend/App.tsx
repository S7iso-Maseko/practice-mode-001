import Button from "@/components/button";
import theme, { Text } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="text3Xl">Open Up Your App!</Text>
        <Button/>
      </View>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})