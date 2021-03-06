import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayArticles from "./src/components/DisplayArticles";
import Login from "./src/components/Login";
import SingleArticle from "./src/components/SingleArticle";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="El Gaucho" component={Login} />
        <Stack.Screen name="Latest news" component={DisplayArticles} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SingleArticle"
          component={SingleArticle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
