import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../../constants/StyleConfig";

const SelectLocationScreen = ({ navigation }) => {
  let data = [
    { label: "1", value: "A" },
    { label: "2", value: "B" },
    { label: "3", value: "C" },
    { label: "4", value: "D" },
  ];
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={StyleConfig.images.bgNum}
          resizeMode="contain"
          blurRadius={20}
        />
        <Image
          style={styles.bgImage2}
          source={StyleConfig.images.bgAllProcess}
          resizeMode="contain"
          blurRadius={15}
        />
        <View style={styles.header}>
          <Icon
            name="md-chevron-back"
            size={32}
            color={StyleConfig.colors.offshadeBlack}
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.topImage}>
          <Image
            style={{ flex: 1 }}
            source={StyleConfig.images.location}
            resizeMode="contain"
          />
          <Text style={styles.caption}>Select Your Location</Text>
          <View style={styles.secondryTextContainer}>
            <Text style={styles.secondryText}>
              Switch on your location to stay in tune with what’s happening in
              your area
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Your Zone</Text>
            <RNPickerSelect
              placeholder={{ label: "Select your Zone", value: "null" }}
              items={data}
              onValueChange={(label) => {
                console.log(label);
              }}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Your Area</Text>
            <RNPickerSelect
              placeholder={{ label: "Types of your area", value: "null" }}
              items={data}
              onValueChange={(label) => {
                console.log(label);
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            title="Submit"
            titleStyle={{ color: StyleConfig.colors.offWhite }}
            buttonItemStyle={{ flex: 1 }}
            onSelect={() => {
              navigation.navigate("LogIn");
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.bgColor2,
  },
  bgImage: {
    position: "absolute",
    zIndex: -99,
  },
  bgImage2: {
    position: "absolute",
    zIndex: -99,
    marginTop: StyleConfig.height / 1.23,
  },
  header: {
    flexDirection: "row",
  },
  backButton: {
    margin: StyleConfig.width / 20,
    backgroundColor: "transparent",
  },
  topImage: {
    flex: 1,
    marginHorizontal: StyleConfig.width / 25,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: StyleConfig.width / 15,
    justifyContent: "flex-end",
  },
  caption: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 26,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
  secondryTextContainer: {
    marginTop: StyleConfig.height / 55,
  },
  secondryText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
    textAlign: "center",
  },
  pickerContainer: {
    borderBottomWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    borderStyle: "solid",
    marginBottom: StyleConfig.height / 35,
  },
  pickerTitle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: StyleConfig.width / 15,
    flex: 0.4,
  },
});

export default SelectLocationScreen;
