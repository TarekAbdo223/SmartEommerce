import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <AppSaveView style={styles.container}>
        <AppText variant="bold">Bold</AppText>
        <AppText
          variant="medium"
          onPress={() => {
            showMessage({
              message: "Hello Medium",
              color: "yellow",
              type: "danger",
            });
          }}
        >
          Medium
        </AppText>
      </AppSaveView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
