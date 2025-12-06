import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../../components/texts/AppText";
import ProductsCard from "../../components/cards/ProductsCard";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <ProductsCard />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
