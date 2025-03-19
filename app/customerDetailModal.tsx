import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import customers from '../data/customers.json';

export default function CustomerDetailModal() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const customer = customers.find((c) => c.id === Number(id));

  if (!customer) return null;

  return (
    <View className="flex-1 bg-gray-900">
      {/* Header with close button */}
      <View className="flex-row items-center justify-between p-6">
        <Text className="text-2xl font-bold text-white">Détails client</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6">
        {/* Customer Profile */}
        <View className="items-center pb-8">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-teal-500">
            <Text className="text-4xl font-bold text-white">{customer.firstName[0]}</Text>
          </View>
          <Text className="mt-4 text-2xl font-bold text-white">
            {customer.firstName} {customer.lastName}
          </Text>
          <Text className="mt-1 text-lg text-gray-400">{customer.age} ans</Text>
        </View>

        {/* POD */}
        <View className="py-6">
          <View className="rounded-xl bg-gray-800 p-4">
            <View className="flex-row items-center">
              <FontAwesome name="plug" size={20} color="#14b8a6" />
              <Text className="ml-3 text-lg text-gray-400">POD:</Text>
              <Text className="ml-2 text-lg text-white">{customer.pod}</Text>
            </View>
          </View>
        </View>

        {/* Consumption Details */}
        <View className="rounded-xl bg-gray-800 p-6">
          <Text className=" text-xl font-semibold text-white">Consommation</Text>
          {customer.consumption.map((item) => (
            <View key={item.key} className="mt-4 ">
              <View className="mb-2 flex-row items-center">
                <FontAwesome
                  name={item.key === 'electricity' ? 'bolt' : 'fire'}
                  size={20}
                  color="#14b8a6"
                />
                <Text className="ml-3 text-lg capitalize text-white">{item.key}</Text>
              </View>
              <View className="rounded-lg bg-gray-700 p-4">
                <View className="flex-row items-baseline">
                  <Text className="text-3xl font-bold text-white">{item.value}</Text>
                  <Text className="ml-2 text-lg text-gray-400">
                    {item.key === 'electricity' ? 'kWh' : 'm³'}
                  </Text>
                </View>
                <Text className="mt-2 text-gray-400">
                  {item.key === 'electricity'
                    ? 'Consommation électrique mensuelle'
                    : 'Consommation de gaz mensuelle'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
