import { SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native';

export default function Home() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-gray-900">
        <View className="flex-1 justify-between px-6 pb-6 pt-4">
          {/* Input field */}
          <View className="w-full rounded-lg bg-gray-800 p-4">
            <Text className="text-md mb-2 text-gray-400">
              Saisir les PODs de votre maison (10 maximums)
            </Text>
            <View className="h-20 flex-row items-center rounded-md bg-gray-700 px-4 py-3">
              <TextInput
                placeholder="10 PODs maximum, séparés par une virgule, un espace ou un retour à la ligne"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-white"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
