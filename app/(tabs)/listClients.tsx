import { View, SafeAreaView, Text, ScrollView } from 'react-native';

import CustomerCard from '../../components/CustomerCard';
import customers from '../../data/customers.json';

export default function ListClients() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 px-6 pb-6 pt-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-white">Nos clients</Text>
          <Text className="mt-2 text-gray-400">Liste des utilisateurs et leurs consommations</Text>
        </View>

        {/* Client List */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
