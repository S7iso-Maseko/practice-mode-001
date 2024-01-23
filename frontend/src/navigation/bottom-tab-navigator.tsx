import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/screens/completed-screen";
import TodayScreen from "@/screens/today-screen";
import CategoriesScreen from "@/screens/categories-screen";


const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
            <Tab.Screen name="Completed" component={CompletedScreen} />
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="CategoriesStack" component={CategoriesScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavNavigator;