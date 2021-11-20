import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider} from 'native-base';
import { createStackNavigator} from '@react-navigation/stack';
import { Home } from "./src/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from "./src/screens/auth/Auth";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    );
} 

const App = () => {

    return (
        // <NativeBaseProvider>
        //     <NavigationContainer>
        //         <MyStack />
        //     </NavigationContainer>
        // </NativeBaseProvider>
        <SafeAreaView style={{ flex: 1 }}>
        <Auth />
        </SafeAreaView>
    );
};


export default App;
