import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-4xl font-work-medium text-secondary-200">
          ProductScreen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProductScreen