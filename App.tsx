import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";

export default function App() {
  return (
    <AppSaveView>
      <AppText variant="bold">Bold</AppText>
      <AppText variant="medium">Medium</AppText>
    </AppSaveView>
  );
}

const styles = StyleSheet.create({});
