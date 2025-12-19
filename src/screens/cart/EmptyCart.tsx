import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Feather
        name="shopping-bag"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart Is Empty</AppText>
      <AppText style={styles.subtitle}>
        Browse our products and find something you like
      </AppText>
      <AppButton
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
        title="Start Shopping"
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subtitle: {
    fontSize: s(16),
    fontFamily: AppFonts.medium,
    color: AppColors.medGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.8,
  },
});
