import React from 'react';
import AppInner from 'AppInner';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import KeyboardAvoid from '@providers/keyboardAvoid';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          {/* <KeyboardAvoid> */}
          <AppInner />
          {/* </KeyboardAvoid> */}
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
