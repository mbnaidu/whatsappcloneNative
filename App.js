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

// PAGES
import Chat from './pages/Chat';
import ChatPage from './pages/ChatPage';
import MediaPage from './pages/MediaPage';
import BioPage from './pages/BioPage';
import Settings from './Settings/Settings';
import Accounts from './Settings/Accounts/Accounts';
import Privacy from './Settings/Accounts/Privacy/Privacy';
import Verification from './Settings/Accounts/Verification/Verification';
import Change from './Settings/Accounts/Change/Change';
import Delete from './Settings/Accounts/Delete';
import Status from './Settings/Accounts/Privacy/Status/Status';
import StatusExcept from './Settings/Accounts/Privacy/Status/StatusExcept';
import Only from './Settings/Accounts/Privacy/Status/Only';
import GroupsExcept from './Settings/Accounts/Privacy/Groups/GroupsExcept';
import Groups from './Settings/Accounts/Privacy/Groups/Groups'
import Location from './Settings/Accounts/Privacy/Location';
import Lock from './Settings/Accounts/Privacy/Lock';
import Blocked from './Settings/Accounts/Privacy/Blocked/Blocked';
import TwoStep from './Settings/Accounts/Verification/TwoStep';
import Number from './Settings/Accounts/Change/NewNumber';
import NewNumber from './Settings/Accounts/Change/NewNumber';

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
				{/* PAGES */}
				<Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
				<Stack.Screen name="MediaPage" component={MediaPage} options={{ headerShown: false }} />
				<Stack.Screen name="BioPage" component={BioPage} options={{ headerShown: false }} />
				<Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
				{/* CONTENTS */}
				<Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
				<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
				<Stack.Screen name="Reminder" component={Reminder} options={{ headerShown: false }} />
				<Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
				<Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
				<Stack.Screen name="Bluetooth" component={Bluetooth} options={{ headerShown: false }} />
				{/* SETTINGS */}
					<Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
					{/* ACCOUNTS */}
						<Stack.Screen name="Accounts" component={Accounts} options={{ headerShown: false }} />
						<Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
						<Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
						<Stack.Screen name="Change" component={Change} options={{ headerShown: false }} />
						<Stack.Screen name="Delete" component={Delete} options={{ headerShown: false }} />
						{/* STATUS */}
							<Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
							<Stack.Screen name="StatusExcept" component={StatusExcept} options={{ headerShown: false }} />
							<Stack.Screen name="Only" component={Only} options={{ headerShown: false }} />
							<Stack.Screen name="GroupsExcept" component={GroupsExcept} options={{ headerShown: false }} />
							<Stack.Screen name="Groups" component={Groups} options={{ headerShown: false }} />
							<Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
							<Stack.Screen name="Blocked" component={Blocked} options={{ headerShown: false }} />
							<Stack.Screen name="Lock" component={Lock} options={{ headerShown: false }} />
							<Stack.Screen name="TwoStep" component={TwoStep} options={{ headerShown: false }} />
							<Stack.Screen name="NewNumber" component={NewNumber} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
	}
}