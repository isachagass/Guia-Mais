import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Comodos from "./src/screens/Comodos";
import CadastroComodo from "./src/screens/CadastroComodo";
import AlertaIncendio from "./src/screens/AlertaIncendio";
import Alarme from "./src/screens/Alarme";
import SenhaAlarme from "./src/screens/SenhaAlarme";
import Json from "./src/screens/Json";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AlertaIncendio" component={AlertaIncendio} />
        <Stack.Screen name="Alarme" component={Alarme} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comodos" component={Comodos} />
        <Stack.Screen name="CadastroComodo" component={CadastroComodo} />
        <Stack.Screen name="SenhaAlarme" component={SenhaAlarme} />
        <Stack.Screen name="Json" component={Json} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
