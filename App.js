import * as React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  View } from 'react-native';

// CONTENTS
import Group from './Contents/Group';
import Contact from './Contents/Contact';
import Search from './Contents/Search';
import Reminder from './Contents/Reminder';
import Schedule from './Contents/Schedule';
import Message from './Contents/Message';
import Bluetooth from './Contents/Bluetooth';

// SCREENS
import Chat from './pages/Chat';
import ChatPage from './pages/ChatPage';
import MediaPage from './pages/MediaPage';
import BioPage from './pages/BioPage';
import Settings from './Settings/Settings';


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
				name="Chat"
				component={Chat}
				options={{ headerShown: false }} 
				/>
				<Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
				<Stack.Screen name="MediaPage" component={MediaPage} options={{ headerShown: false }} />
				<Stack.Screen name="BioPage" component={BioPage} options={{ headerShown: false }} />
				<Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
				<Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
				<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
				<Stack.Screen name="Reminder" component={Reminder} options={{ headerShown: false }} />
				<Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
				<Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
				<Stack.Screen name="Bluetooth" component={Bluetooth} options={{ headerShown: false }} />
				<Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
	}
}