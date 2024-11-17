import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "@/components/custom/SearchInput";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary min-h-[100vh]">
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-black">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-secondary">
              Kashish Garg!!
            </Text>
          </View>

          <View className="mt-1.5">
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
        <SearchInput />
        <View className="justify-center items-center m-auto">
          <Image
            source={images.slider}
            className="w-[350px] h-[250px]"
            resizeMode="contain"
          />
        </View>
        <Text className="font-pmedium text-3xl text-black font-bold mx-2 space-x-4 mb-5 text-center">
          Check Your Family's Wellness Report
        </Text>
        <View>
          {/* // horizontal profile cards here (Raghav Garg, Ananya Garg) */}
          <TouchableOpacity
            onPress={() => router.push("/health")}
            className="flex flex-col items-start justify-start space-x-2 w-[90vw] bg-secondary-100 m-auto p-5 px-8 rounded-2xl my-4 mt-0"
          >
            <View className="flex justify-left items-start flex-row mb-2 w-full">
              <Image
                source={images.profile}
                className="w-8 h-8"
                resizeMode="contain"
                style={{ borderRadius: 50 }}
              />
              <Text className="text-primary font-pmedium text-xl ml-2 font-bold">
                Ananya Garg
              </Text>
            </View>
            <View className="ml-10 flex-row flex-wrap justify-between">
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Car No:</Text> DL 3C 1234
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Gender:</Text> Female
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">City:</Text> New Delhi
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Status:</Text> Active
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/health")}
            className="flex flex-col items-start justify-start space-x-2 w-[90vw] bg-secondary-100 m-auto p-5 px-8 rounded-2xl my-4"
          >
            <View className="flex justify-left items-start flex-row mb-2 w-full">
              <Image
                source={images.profile}
                className="w-8 h-8"
                resizeMode="contain"
                style={{ borderRadius: 50 }}
              />
              <Text className="text-primary font-pmedium text-xl ml-2 font-bold">
                Raghav Garg
              </Text>
            </View>
            <View className="ml-10 flex-row flex-wrap justify-between">
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Car No:</Text> DL 3C 3432
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Gender:</Text> Male
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">City:</Text> New Delhi
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Status:</Text> Active
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
