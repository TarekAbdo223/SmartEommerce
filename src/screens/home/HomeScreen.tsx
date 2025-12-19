import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../../components/texts/AppText";
import ProductsCard from "../../components/cards/ProductsCard";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductsCard
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
            onAddToCartPress={() => {}}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginBottom: vs(10),
          paddingVertical: s(10),
        }}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
