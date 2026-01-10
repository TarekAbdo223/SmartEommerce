import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeScreen from "../home/HomeScreen";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText variant="Bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, tarek
      </AppText>
      <View
        style={{
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        <ProfileSectionButton title={"My Orders"} />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"Logout"} />
      </View>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
