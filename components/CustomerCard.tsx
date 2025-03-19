import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

type CustomerCardProps = {
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    pod: string;
    consumption: {
      key: string;
      value: number;
    }[];
  };
};

export default function CustomerCard({ customer }: CustomerCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="mb-4 overflow-hidden rounded-xl bg-gray-800 p-4"
      onPress={() => router.push(`/customerDetailModal?id=${customer.id}`)}>
      {/* Customer Header */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-teal-500">
            <Text className="text-lg font-bold text-white">{customer.firstName[0]}</Text>
          </View>
          <View>
            <Text className="text-lg font-semibold text-white">
              {customer.firstName} {customer.lastName}
            </Text>
            <Text className="text-sm text-gray-400">{customer.age} ans</Text>
            <Text className="mt-1 text-xs text-teal-500">POD: {customer.pod}</Text>
          </View>
        </View>
        <FontAwesome name="angle-right" size={20} color="#9CA3AF" />
      </View>

      {/* Consumption Stats */}
      <View className="mt-4 flex-row justify-between">
        {customer.consumption.map((item) => (
          <View key={item.key} className="m-1 flex-1 rounded-lg bg-gray-700 p-3">
            <Text className="text-sm capitalize text-gray-400">{item.key}</Text>
            <View className="mt-1 flex-row items-baseline">
              <Text className="text-lg font-bold text-white">{item.value}</Text>
              <Text className="ml-1 text-sm text-gray-400">
                {item.key === 'electricity' ? 'kWh' : 'm³'}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}
