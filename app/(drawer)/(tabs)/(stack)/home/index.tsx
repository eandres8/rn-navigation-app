import { View, Text } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

import { CustomButton } from '@/src/components/shared';

const HomeScreen = () => {
  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View className="gap-3 p-3">
      <Text className="text-3xl font-work-black">HomeScreen</Text>

      <Link href="/products" asChild>
        <CustomButton color="primary">
          Products
        </CustomButton>
      </Link>
      <Link href="/profile" asChild>
        <CustomButton color="secondary">
          Profile
        </CustomButton>
      </Link>
      <Link href="/settings" asChild>
        <CustomButton color="tertiary">
          Settings
        </CustomButton>
      </Link>
      <Link href="/profile" asChild>
        <CustomButton variant="text-only">
          Products 2
        </CustomButton>
      </Link>
      <CustomButton onPress={onToggleDrawer}>
        Abrir menu
      </CustomButton>
    </View>
  )
}

export default HomeScreen;