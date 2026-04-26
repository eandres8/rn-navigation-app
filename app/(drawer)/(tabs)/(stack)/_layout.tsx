import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeft = (canGoBack?: boolean) => () => {
    if (canGoBack) {
      router.back();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer);
    }
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack }) => (<Ionicons
          name={canGoBack ? 'arrow-back' : 'menu-outline'}
          size={20}
          color={canGoBack ? tintColor : 'black'}
          onPress={onHeaderLeft(canGoBack)}  
        />)
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
      <Stack.Screen name="products/index" options={{ title: "Products Screen" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile Screen" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings Screen" }} />
    </Stack>
  );
};

export default StackLayout;
