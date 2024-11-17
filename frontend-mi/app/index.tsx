import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/custom/CustomButton";

const RootLayout = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4 min-h-[85vh]">
          <Image
            source={images.logo}
            className="w-[250px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[380px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 ">
            <Text className="text-4xl font-bold text-black text-center">
              Ensure your Loved Ones safety With{" "}
              <Text className="text-secondary">VOLKSKRAFT</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 -right-10 w-[136px] h-[12px]"
              resizeMode="contain"
            />
          </View>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyle="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default RootLayout;
