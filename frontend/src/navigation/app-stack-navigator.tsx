import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList, HomeStackParamList } from "./types";
import React from "react";
import BottomTabNavNavigator from "./bottom-tab-navigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavNavigator} />
        </Stack.Navigator>
    )
}

export default AppStackNavigator;