import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const tempItem = {
  id: 2,
  price: 749,
  title: "Lenovo Laptop",
  imageURL:
    "https://image.made-in-china.com/318f0j00nEfGPdYIhWom/6%E6%9C%8814%E6%97%A5%287%29.mp4.webp",
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: tempItem.imageURL }} style={styles.image} />
      </View>

      {/* details container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{tempItem.title}</AppText>
        <AppText style={styles.textPrice}>{tempItem.price}</AppText>
        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.textQty}>1</AppText>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      {/* Delete Button Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color="red" />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },

  imageContainer: { flex: 1.5, justifyContent: "center", alignItems: "center" },
  image: { height: s(80), width: s(80), borderRadius: s(5) },
  detailsContainer: { flex: 3.5 },
  textTitle: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.medium,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.bold,
    marginVertical: vs(5),
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.medium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: 3,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
});
