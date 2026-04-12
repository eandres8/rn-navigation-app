import { Link } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-work-black text-primary">
        Welcome to Nativewind!
      </Text>
      <Link href="/products">Productos</Link>
    </View>
  );
};

export default App;
