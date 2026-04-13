import { View, Text, FlatList } from 'react-native';
import { Link } from 'expo-router';

import { products } from '@/src/store/products.store';

const ProductScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`} className="text-primary">
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ProductScreen;
