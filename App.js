import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import { StatusBar } from 'react-native';
import ChatPage from './pages/ChatPage';
import MediaPage from './pages/MediaPage';
import BioPage from './pages/BioPage';

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
			<Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
			<Stack.Screen name="MediaPage" component={MediaPage} options={{ headerShown: false }} />
			<Stack.Screen name="BioPage" component={BioPage} options={{ headerShown: false }} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App
