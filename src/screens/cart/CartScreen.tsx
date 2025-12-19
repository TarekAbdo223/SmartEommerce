import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSaveView from "../../components/views/AppSaveView";
import EmptyCart from "./EmptyCart";

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <EmptyCart />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
