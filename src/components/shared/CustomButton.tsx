import { Text, Pressable, PressableProps } from 'react-native';

type Props = {
  children: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
} & PressableProps;

export const CustomButton: React.FC<Props> = ({ children, className, color = 'primary', onPress, variant }) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];
  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'text-only') {
    return (
      <Pressable onPress={onPress} className={`p-2 ${className}`}>
        <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
      </Pressable>
    );
  }
  
  return (
    <Pressable onPress={onPress} className={`p-2 rounded-md ${btnColor} active:opacity-90 ${className}`}>
      <Text className="text-white text-center font-work-medium">{children}</Text>
    </Pressable>
  );
}
