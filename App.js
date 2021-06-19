import React, {useState, useRef, useEffect, useContext} from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  View,StatusBar } from 'react-native';


// CONTENTS
import Group from './Contents/Group';
import Contact from './Contents/Contact';
import Search from './Contents/Search';
import Reminder from './Contents/Reminder';
import Schedule from './Contents/Schedule';
import Message from './Contents/Message';
import Bluetooth from './Contents/Bluetooth';

// PAGES
import Chat from './Screens/Chat';
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
import NewNumber from './Settings/Accounts/Change/NewNumber';
import Chats from './Settings/Chats/Chats';
import History from './Settings/Chats/History';
import Backup from './Settings/Chats/Backup';
import Choose from './Settings/Chats/Choose';
import Notifications from './Settings/Notifications';
import Storage from './Settings/Storage';
import Help from './Settings/Help';
import QuickSchedule from './Contents/QuickSchedule';
import QuickReminder from './Contents/QuickReminder';
import NewGroup from './Contents/NewGroup';
import ChatPage from './User/ChatPage';
import MediaPage from './User/MediaPage';
import BioPage from './User/BioPage';
import Capture from './Screens/Capture';
import Requirements from './Requirements/Requirements';
import Login from './Requirements/Login';
import Profile from './Requirements/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TypeStatus from './Contents/TypeStatus';
import GroupPage from './User/GroupPage';
import GroupBioPage from './User/GroupBioPage';
import StatusTab from './Screens/StatusTab';
import Trail from './Screens/Trail';
import SQLite from './Screens/SQlite';

const Stack = createStackNavigator();


const initialState = {
	isAudioEnabled: true,
	status: 'disconnected',
	participants: new Map(),
	videoTracks: new Map(),
	userName: '',
	roomName: '',
	token: '',
};

const AppContext = React.createContext(initialState);

export default function App() {
	const [loading,setLoading] = useState(true);
	const [props, setProps] = useState(initialState);
	useEffect(() => {
    (async () => {
		await Font.loadAsync({
		'Roboto': require('native-base/Fonts/Roboto.ttf'),
		'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
		})
		setLoading(false);
		})();
	}, []);
	if (loading) {
			return (
			<View></View>
			);
		}
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<AppContext.Provider value={{props, setProps}}>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen name="Requirements" component={Requirements}options={{ headerShown: false, }} />
							<Stack.Screen name="Login" component={Login}options={{ headerShown: false }} />
							<Stack.Screen name="Profile" component={Profile}options={{ headerShown: false }} />
							{/* SCREENS */}
							<Stack.Screen name="Trail" component={Trail}options={{ headerShown: false }} />
							<Stack.Screen name="TypeStatus" component={TypeStatus}options={{ headerShown: false }} />
							<Stack.Screen name="Chat" component={Chat}options={{ headerShown: false, }} />
							<Stack.Screen name="Capture" component={Capture} options={{ headerShown: false }} />
							<Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
							<Stack.Screen name="MediaPage" component={MediaPage} options={{ headerShown: false }} />
							<Stack.Screen name="BioPage" component={BioPage} options={{ headerShown: false }} />
							<Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
							<Stack.Screen name="StatusTab" component={StatusTab} options={{ headerShown: false }} />
							{/* CONTENTS */}
							<Stack.Screen name="GroupPage" component={GroupPage} options={{ headerShown: false }} />
							<Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
							<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
							<Stack.Screen name="Reminder" component={Reminder} options={{ headerShown: false }} />
							<Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
							<Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
							<Stack.Screen name="Bluetooth" component={Bluetooth} options={{ headerShown: false }} />
							<Stack.Screen name="QuickSchedule" component={QuickSchedule} options={{ headerShown: false }} />
							<Stack.Screen name="QuickReminder" component={QuickReminder} options={{ headerShown: false }} />
							<Stack.Screen name="NewGroup" component={NewGroup} options={{ headerShown: false }} />
							<Stack.Screen name="GroupBioPage" component={GroupBioPage} options={{ headerShown: false }} />
							{/* SETTINGS */}
								<Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
								{/* ACCOUNTS */}
								<Stack.Screen name="SQLite" component={SQLite} options={{ headerShown: false }} />
									<Stack.Screen name="Accounts" component={Accounts} options={{ headerShown: false }} />
									<Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
									<Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
									<Stack.Screen name="Change" component={Change} options={{ headerShown: false }} />
									<Stack.Screen name="Delete" component={Delete} options={{ headerShown: false }} />
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
								{/* CHATS */}
									<Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
									<Stack.Screen name="Backup" component={Backup} options={{ headerShown: false }} />
									<Stack.Screen name="History" component={History} options={{ headerShown: false }} />
									<Stack.Screen name="Choose" component={Choose} options={{ headerShown: false }} />
								{/* NOTIFICATIONS */}
									<Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
								{/* STORAGE AND DATA */}
									<Stack.Screen name="Storage" component={Storage} options={{ headerShown: false }} />
								{/* HELP */}
									<Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
						</Stack.Navigator>
					</NavigationContainer>
				</AppContext.Provider>
			</>
		);
}
