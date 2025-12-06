import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeScreen from "../home/HomeScreen";

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeScreen />
      <Text>ProfileScreen</Text>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
