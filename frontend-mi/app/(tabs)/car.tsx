import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "@/components/custom/SearchInput";
import { router } from "expo-router";

const Car = () => {
  return (
    <SafeAreaView className="bg-primary min-h-[100vh]">
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-center items-start flex-row mb-6">
          <Text className="font-pmedium text-3xl text-black font-bold text-center">
            Car Health Monitoring
          </Text>
        </View>
        <SearchInput />
        <View className="mt-20">
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
            <View className="ml-10 flex-col gap-1 flex-wrap justify-between">
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Last Service Date:</Text> 12th Oct
                2023
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Next Service Due:</Text> 12th Apr
                2024
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Oil Level:</Text> Full
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Tire Pressure:</Text> 32 PSI
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Battery Health:</Text> Good
              </Text>
            </View>
          </TouchableOpacity>

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
                Raghav Garg
              </Text>
            </View>
            <View className="ml-10 flex-col gap-1 flex-wrap justify-between">
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Last Service Date:</Text> 10th Nov
                2023
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Next Service Due:</Text> 10th May
                2024
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Oil Level:</Text> Full
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Tire Pressure:</Text> 30 PSI
              </Text>
              <Text className="text-primary font-pmedium text-sm">
                <Text className="font-bold">Battery Health:</Text> Good
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Car;
