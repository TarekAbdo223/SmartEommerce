import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderItem, { orderData } from "../../components/cards/OrderItem";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";

const MyOrdersScreen = () => {
  return (
    <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
      <FlatList
        data={orderData}
        renderItem={({ item }) => (
          <OrderItem
            totalPrice={item.totalPrice}
            totalAmount={item.totalAmount}
            date={item.date}
            style={{ marginBottom: 10 }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
