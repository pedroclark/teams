import { NavigationContainer } from "@react-navigation/native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { AppRoutes } from "./app.routes";

export function Routes (){
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}