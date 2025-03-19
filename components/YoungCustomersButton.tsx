import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  Modal,
  View,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';

import customers from '../data/customers.json';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  pod: string;
  consumption: {
    key: string;
    value: number;
  }[];
}

function getYoungCustomersName(customers: Customer[]): string[] {
  return customers
    .filter((customer) => customer.age < 26)
    .map((customer) => `${customer.firstName ?? ''} ${customer.lastName}`.trim())
    .sort((a, b) => {
      const [firstNameA, lastNameA] = a.split(' ');
      const [firstNameB, lastNameB] = b.split(' ');
      return lastNameA.localeCompare(lastNameB) || firstNameA.localeCompare(firstNameB);
    });
}

export default function YoungCustomersButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const youngCustomers = getYoungCustomersName(customers as Customer[]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="rounded-lg bg-gray-800 p-4 active:opacity-80">
        <View className="flex-row items-center justify-center">
          <FontAwesome name="users" size={20} color="#14b8a6" />
          <Text className="ml-2 text-lg font-semibold text-white">Promo (- 26 ans)</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 bg-gray-900/95">
          <SafeAreaView className="flex-1">
            <View className="flex-1 px-6">
              {/* Header with close button */}
              <View className="flex-row items-center justify-between py-6">
                <Text className="text-2xl font-bold text-white">Clients de moins de 26 ans</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <FontAwesome name="close" size={24} color="#14b8a6" />
                </TouchableOpacity>
              </View>

              {/* Customer List */}
              <ScrollView className="flex-1">
                <View className="rounded-xl bg-gray-800 px-4">
                  {youngCustomers.length > 0 ? (
                    youngCustomers.map((customer, index) => (
                      <View key={index} className=" my-3 flex-row items-center">
                        <View className="h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                          <Text className="text-lg font-bold text-white">{customer[0]}</Text>
                        </View>
                        <Text className="ml-3 text-lg text-white">{customer}</Text>
                      </View>
                    ))
                  ) : (
                    <Text className="text-center text-lg text-gray-400">
                      Aucun client de moins de 26 ans
                    </Text>
                  )}
                </View>
              </ScrollView>
            </View>
            {youngCustomers.length > 0 && (
              <TouchableOpacity
                onPress={() => {
                  // Using mailto with multiple recipients
                  const emailList = youngCustomers.join(',');
                  Linking.openURL(`mailto:?bcc=${emailList}`);
                }}
                className="mx-6 mb-6 rounded-lg bg-teal-500 p-4 active:opacity-80">
                <View className="flex-row items-center justify-center">
                  <FontAwesome name="envelope" size={20} color="#fff" />
                  <Text className="ml-2 text-lg font-semibold text-white">
                    Envoyer un email aux clients
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}
