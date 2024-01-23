import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";


const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }
    return (
        <Box>
            <Text>Sign in Screen</Text>
            <Button title="Sign in" onPress={navigateToSignInScreen}></Button>
        </Box>
    )
}

export default SignUpScreen;