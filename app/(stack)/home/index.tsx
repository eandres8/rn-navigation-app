import { View, Text } from 'react-native';
import { router } from 'expo-router';

import { CustomButton } from '@/src/components/shared';

const HomeScreen = () => {
  return (
    <View className="gap-3 p-3">
      <Text className="text-3xl font-work-black">HomeScreen</Text>

      <CustomButton color="primary" onPress={() => router.push('/products')}>
        Products
      </CustomButton>
      <CustomButton color="secondary" onPress={() => router.push('/profile')}>
        Profile
      </CustomButton>
      <CustomButton color="tertiary" onPress={() => router.push('/settings')}>
        Settings
      </CustomButton>
      <CustomButton variant="text-only" onPress={() => router.push('/settings')}>
        Products 2
      </CustomButton>
    </View>
  )
}

export default HomeScreen;