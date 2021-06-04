import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import {  View } from 'react-native';
import ChatPage from './pages/ChatPage';
import MediaPage from './pages/MediaPage';
import BioPage from './pages/BioPage';
import NewGroup from './Contents/NewGroup';
import NewContact from './Contents/NewContact';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

export default class App extends React.Component {
	state = {
		loading: true
	}
	async componentDidMount() {
		await Font.loadAsync({
		'Roboto': require('native-base/Fonts/Roboto.ttf'),
		'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
		})
		this.setState({ loading: false })
	}
	render() {
		if (this.state.loading) {
			return (
			<View></View>
			);
		}
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
				<Stack.Screen name="NewGroup" component={NewGroup} options={{ headerShown: false }} />
				<Stack.Screen name="NewContact" component={NewContact} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
	}
}