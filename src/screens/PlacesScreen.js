import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../components/HeaderButtons";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

const PlacesScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="save"
            iconName={isAndroid ? "md-add" : "ios-add"}
            onPress={() => {
              navigation.navigate("Add Place");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>Places Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlacesScreen;
