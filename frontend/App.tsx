import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import "./tailwindcss/tailwind.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import queryClient from "./react-query/queryClient";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate>
          <NativeBaseProvider>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </NativeBaseProvider>
        </Hydrate>
      </QueryClientProvider>
    );
  }
}
