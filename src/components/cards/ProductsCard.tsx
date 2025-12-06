import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";

const ProductsCard = () => {
  return (
    <View style={styles.container}>
      {/* Add to Cart */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0qp9dhZEw9xPPGne8q2Aa8Cd7uu6Z64a0A&s",
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>The Witcher 3</AppText>
        <AppText style={styles.priceText}>1200 $</AppText>
      </View>
    </View>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    borderRadius: s(10),
    backgroundColor: AppColors.white,
    ...commonStyles.shadow,
  },
  imageContainer: {
    borderTopLeftRadius: s(10),
    overflow: "hidden",
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    resizeMode: "contain",
    width: "100%",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(15),
    fontFamily: AppFonts.medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    marginTop: vs(7),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
