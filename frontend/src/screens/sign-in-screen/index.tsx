import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";


const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }
    return (
        <Box>
            <Text>Sign in Screen</Text>
            <Button title="Sign Up" onPress={navigateToSignUpScreen}></Button>
        </Box>
    )
}

export default SignInScreen;