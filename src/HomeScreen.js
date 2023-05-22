import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";

const HomeScreen = () => {
    const dev_url = Constants.expoConfig.extra.devBackendUrl;
    const prod_url = Constants.expoConfig.extra.prodBackendUrl;
    const env = process.env.NODE_ENV === "development" ? dev_url : prod_url;
    
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-gray-400 text-md font-bold mt-2">
                Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default HomeScreen;
