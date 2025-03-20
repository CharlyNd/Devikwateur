import { SafeAreaView, StatusBar, View } from 'react-native';

import { PodList } from '../../components/PodListButton';
import YoungCustomersButton from '../../components/YoungCustomersButton';

export default function Home() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-gray-900">
        <View className="flex-1 justify-between px-6 pb-6 pt-4">
          {/* Input for the PODs */}
          <PodList />
          {/* Button to generate the list */}
          <YoungCustomersButton />
        </View>
      </SafeAreaView>
    </>
  );
}
