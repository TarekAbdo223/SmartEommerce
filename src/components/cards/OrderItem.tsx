import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { commonStyles } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { s } from "react-native-size-matters";

export const orderData = [
  {
    id: 1,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
  {
    id: 2,
    date: "2025-01-02",
    totalAmount: 300.5,
    totalPrice: "$5050",
  },
  {
    id: 3,
    date: "2025-01-03",
    totalAmount: 200.5,
    totalPrice: "$150",
  },
];

interface OrderItemProps {
  date: string;
  totalAmount: number;
  totalPrice: string;
  style?: object;
}

const OrderItem: FC<OrderItemProps> = ({
  totalPrice,
  totalAmount,
  date,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>ORDER Details:</AppText>
      <View style={styles.divider} />
      <View style={styles.summaryContainer}>
        <View>
          <AppText>Total Price: {totalAmount}</AppText>
          <AppText>Date: {date}</AppText>
        </View>
        <View style={styles.amountContainer}>
          <AppText style={styles.totalAmount}>
            {Math.abs(totalAmount).toFixed(2)} $
          </AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadow,
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: s(15),
  },
  title: {
    textTransform: "uppercase",
    fontSize: 17,
    marginBottom: 5,
    color: AppColors.primary,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.primary,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  amountContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  totalAmount: {
    color: AppColors.secondaryColor,
  },
  date: {
    color: AppColors.secondaryColor,
  },
});
