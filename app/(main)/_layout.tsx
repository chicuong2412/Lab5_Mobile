import { AuthContextProvider } from "@/components/AuthContext";
import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";

export default function AppLayout() {
  
  const { isLogged } = useContext(AuthContextProvider);

  if (!isLogged) {
    return <Redirect href={"/(auth)/LoginScreen"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[ID]" options={{ headerShown: true, 
        header: ({route}) => (
          <>
          
          </>
        )
       }} />
    </Stack>
  );
}
