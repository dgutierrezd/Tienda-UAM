import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider} from 'native-base';
import { createStackNavigator} from '@react-navigation/stack';
import { Home } from "./src/screens/Home";

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
        <NativeBaseProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </NativeBaseProvider>);
};


export default App;
