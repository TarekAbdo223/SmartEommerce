import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../../components/texts/AppText";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText>HomeScreen</AppText>
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
