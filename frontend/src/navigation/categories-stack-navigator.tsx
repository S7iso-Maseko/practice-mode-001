import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesStackParamList, HomeStackParamList } from "./types";
import React from "react";
import CategoriesScreen from "@/screens/categories-screen";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
    )
}

export default CategoriesStackNavigator;