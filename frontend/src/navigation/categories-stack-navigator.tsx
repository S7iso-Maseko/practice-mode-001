import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesStackParamList } from "./types";
import React from "react";
import CategoriesScreen from "@/screens/categories-screen";
import CategoryScreen from "@/screens/category-screen";
import CreateCategoryScreen from "@/screens/create-category-screen";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="CreateCategory" component={CreateCategoryScreen} />
        </Stack.Navigator>
    )
}

export default CategoriesStackNavigator;