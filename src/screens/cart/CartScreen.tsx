import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSaveView from "../../components/views/AppSaveView";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalsView from "../../components/cart/TotalsView";

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem />
      <TotalsView />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
