import { NavigationContainer } from "@react-navigation/native"
import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";
import React from "react";


const Navigation = () => {
    const user = true
    
    return (
        <NavigationContainer>
            {/* <AuthStackNavigator/> */}
            <AppStackNavigator />
        </NavigationContainer>
    ) 
}

export default Navigation;