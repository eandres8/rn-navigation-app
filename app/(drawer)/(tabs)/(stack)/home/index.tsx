import { View, Text } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

import { CustomButton } from '@/src/components/shared';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View className="gap-3 p-3">
      <Text className="text-3xl font-work-black">HomeScreen</Text>

        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Products
        </CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/profile")}>
          Profile
        </CustomButton>
        <CustomButton color="tertiary" onPress={() => router.push("/settings")}>
          Settings
        </CustomButton>
        <CustomButton variant="text-only" onPress={() => router.push("/profile")}>
          Products 2
        </CustomButton>
      <CustomButton onPress={onToggleDrawer}>
        Abrir menu
      </CustomButton>
    </View>
  )
}

export default HomeScreen;