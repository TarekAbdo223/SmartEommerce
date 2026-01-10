import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import Checkout from "../screens/cart/Checkout";
import MyOrdersScreen from "../screens/profile/MyOrdersScreen";

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen
        name="CheckoutScreen"
        component={Checkout}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: true,
          headerTitle: "My Orders",
        }}
      />
    </Stack.Navigator>
  );
}
