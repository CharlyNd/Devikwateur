import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import customers from '../data/customers.json';

export default function CustomerDetailModal() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const customer = customers.find((c) => c.id === Number(id));
  const screenWidth = Dimensions.get('window').width;

  if (!customer) return null;

  // Chart configuration
  const chartConfig = {
    backgroundColor: '#1f2937', // gray-800
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(20, 184, 166, ${opacity})`, // teal-500
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#14b8a6',
    },
  };

  // Sample data - you might want to adjust this based on your actual data structure
  const electricityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [
          customer.consumption.find((c) => c.key === 'electricity_jan')?.value || 0,
          customer.consumption.find((c) => c.key === 'electricity_feb')?.value || 0,
          customer.consumption.find((c) => c.key === 'electricity_mar')?.value || 0,
          customer.consumption.find((c) => c.key === 'electricity_apr')?.value || 0,
          customer.consumption.find((c) => c.key === 'electricity_may')?.value || 0,
          customer.consumption.find((c) => c.key === 'electricity_jun')?.value || 0,
        ],
      },
    ],
  };

  const gasData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [
          customer.consumption.find((c) => c.key === 'gas_jan')?.value || 0,
          customer.consumption.find((c) => c.key === 'gas_feb')?.value || 0,
          customer.consumption.find((c) => c.key === 'gas_mar')?.value || 0,
          customer.consumption.find((c) => c.key === 'gas_apr')?.value || 0,
          customer.consumption.find((c) => c.key === 'gas_may')?.value || 0,
          customer.consumption.find((c) => c.key === 'gas_jun')?.value || 0,
        ],
      },
    ],
  };

  return (
    <View className="flex-1 bg-gray-900">
      {/* Header with close button */}
      <View className="flex-row items-center justify-end p-6">
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

        {/* Consumption Details with Charts */}
        <View className="rounded-xl bg-gray-800 p-6">
          <Text className="text-xl font-semibold text-white">Consommation</Text>

          {/* Electricity Chart */}
          <View className="mt-4 w-4/5">
            <View className="mb-2 flex-row items-center">
              <FontAwesome name="bolt" size={20} color="#14b8a6" />
              <Text className="ml-3 text-lg capitalize text-white">Électricité</Text>
            </View>
            <LineChart
              data={electricityData}
              width={screenWidth * 0.8}
              height={200}
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              yAxisSuffix=" kWh"
            />
          </View>

          {/* Gas Chart */}
          <View className="mt-8">
            <View className="mb-2 flex-row items-center">
              <FontAwesome name="fire" size={20} color="#14b8a6" />
              <Text className="ml-3 text-lg capitalize text-white">Gaz</Text>
            </View>
            <LineChart
              data={gasData}
              width={screenWidth * 0.8}
              height={200}
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              yAxisSuffix=" m³"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
