import { Text, View } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

type Props = DrawerContentComponentProps & {};

export const CustomDrawerContent: React.FC<Props> = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex items-center justify-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">AV</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
