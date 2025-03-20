import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import customersData from '../data/customers.json';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  pod: string;
  consumption: { key: string; value: number }[];
}

export function PodList() {
  const [pods, setPods] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [customers] = useState<Customer[]>(customersData);
  const [matchingCustomers, setMatchingCustomers] = useState<Customer[]>([]);

  // Handle the input for the PODs
  const handleChange = (value: string) => {
    const podList = value.split(/[\s,\n]+/).filter((pod) => pod.length > 0);
    if (podList.length > 10) {
      setError('Maximum 10 PODs autorisés');
    } else {
      setError('');
    }
    setPods(value);
  };

  // Handle the submission of the PODs
  const handleSubmit = () => {
    // Check if the pods are valid
    const podList = pods.split(/[\s,\n]+/).filter((pod) => pod.length > 0);
    if (podList.length > 10) {
      return;
    }
    // Check if the pods are in the customers data
    const matches = customers.filter((customer) =>
      podList.some((pod) => customer.pod.toLowerCase() === pod.toLowerCase())
    );
    // If there are matches, set the matching customers and display the list
    if (matches.length > 0) {
      setMatchingCustomers(matches);
    } else {
      setError('Aucun client trouvé avec ces PODs');
    }
  };

  const renderCustomer = ({ item }: { item: Customer }) => (
    // Display the customer details in a modal when the user clicks on the customer
    <TouchableOpacity
      className="mb-2 rounded-lg bg-gray-800 p-4"
      onPress={() => {
        router.push({
          pathname: '/customerDetailModal',
          params: { id: item.id },
        });
      }}>
      <Text className="text-lg font-semibold text-white">
        {item.firstName} {item.lastName}
      </Text>
      <Text className="text-gray-400">POD: {item.pod}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      {/* Input for the PODs */}
      <View className="w-full rounded-lg bg-gray-800 p-4">
        <Text className="text-md mb-2 font-medium text-gray-400">
          Saisir les PODs (10 maximums)
        </Text>

        <View className="gap-4">
          <View className="rounded-md bg-gray-700 p-4 ">
            <TextInput
              value={pods}
              onChangeText={handleChange}
              placeholder="Séparation par une virgule, un espace ou un retour à la ligne uniquement"
              placeholderTextColor="#9CA3AF"
              className="text-lg text-white"
              multiline
              autoCapitalize="characters"
            />
          </View>

          {/* Button to generate the list */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={error !== ''}
            className={`rounded-lg p-3 ${error ? 'bg-gray-600' : 'bg-teal-500'}`}>
            <Text
              className={`text-center text-base font-semibold ${
                error ? 'text-gray-400' : 'text-white'
              }`}>
              Générer la liste
            </Text>
          </TouchableOpacity>
        </View>

        {error ? <Text className="mt-2 text-red-500">{error}</Text> : null}
      </View>

      {/* List of customers found */}
      <View className="flex-1 bg-gray-900">
        {matchingCustomers.length > 0 && (
          <View className="flex-row items-center justify-between border-b border-gray-800 p-4">
            <Text className="text-xl font-semibold text-white">Clients trouvés</Text>
            <TouchableOpacity onPress={() => alert('Devis validés avec succès ! 🎉')}>
              <Text className="text-teal-500">Valider les devis</Text>
            </TouchableOpacity>
          </View>
        )}
        <FlatList
          data={matchingCustomers}
          renderItem={renderCustomer}
          keyExtractor={(item) => item.id.toString()}
          className="flex-1 px-4 pt-4"
        />
      </View>
    </ScrollView>
  );
}
