import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/actions/places.actions";

const NewPlaceScreen = ({ navigation }) => {
  const [newPlace, setNewPlace] = useState("");
  const dispatch = useDispatch();

  const placeChangeHandler = (text) => {
    setNewPlace(text);
  };

  const savePlaceHandler = () => {
    dispatch(addPlace(newPlace));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Place screen</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={placeChangeHandler}
          value={newPlace}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
