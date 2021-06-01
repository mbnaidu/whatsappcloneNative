import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
	setTimeout(()=>{
			StatusBar.setBackgroundColor('#128C7E',true);
		},100)
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerShown: false }} 
			/>
			<Stack.Screen name="SecondPage" component={SecondPage} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App
