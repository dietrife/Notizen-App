import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import Header from './src/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name='Home'
        options={{
          headerTitle: () => <Header name="Notes" />,
          headerStyle:{
            backgroundColor: '#4c00b0',
            height:120,

          }
        }}
      />
      <Stack.Screen
        component={NoteAdd}
        name='NoteAdd'
        options={{
          headerTitle: () => <Header name="Add Notes" />,
          headerStyle:{
            backgroundColor: '#4c00b0',
            height:120,
            
          }
        }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
