import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, TabHeading, Badge, Thumbnail, ListItem, Fab, View, Card, Label, Input, Item} from 'native-base';
import { ScrollView, Text,Image, Modal, TouchableWithoutFeedback, Alert, FlatList} from 'react-native';
import styles from '../Styles/First';
import Calls from './Calls';
import Status from './Status';
import * as SQLite from "expo-sqlite";
import * as Contacts from 'expo-contacts';
import axios from 'axios';
import GroupTab from './GroupTab';


export default function Chat({navigation,route}) {
	const [allContacts,setAllContacts] = useState([]);
	useEffect(() => {
    (async () => {
		const { status } = await Contacts.requestPermissionsAsync();
		if (status === 'granted') {
			const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.PhoneNumbers],
			});

			if (data.length > 0) {
			setAllContacts(data)
			}
		}
		})();
	}, []);
    const [mainModalVisible,setMainModalVisible] = useState(false);
    const [aeroplanemode,setAeroplanemode] = useState(false);
	const Item = (item) =>{
		return(
			<View style={styles.listcontainer}>
				<ListItem noBorder button onPress={() =>{navigation.navigate('ChatPage',{username:item.data.name})}} > 
					<Thumbnail
						source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
					></Thumbnail>
					<Icon
						type="MaterialIcons"
						name="nightlight-round"
						style={{color:"#000000",fontSize:16,marginBottom:30}}
					/>
					<Icon
						type="MaterialIcons"
						name="airplanemode-on"
						style={styles.aeroplanemodeon}
					/>
					<Body>
						<Text>  {item.data.name}</Text>
						<Text style={{fontFamily:"sans-serif-light"}}>  {item.data.phoneNumbers[0].number}</Text>
					</Body>
					<Right>
						<Text note style={{color:"black"}}>3:23 pm</Text>
						<Badge style={styles.badgeChats}>
							<Text style={styles.badgeChatsText}>1</Text>
						</Badge>
					</Right>
				</ListItem>
			</View>
		)
	}
	
    return (
        <Container>
				<Container>
					<View >
						<Header noLeft style={styles.headerBackgroundColor} noBorder>
							<Body>
								<Title style={styles.appTitle} >PIGEON</Title>
							</Body>
							<Right>
								<Button transparent onPress={() =>{showDatabase()}}>
									<Image style={styles.searchIcon} source={require('../Assets/pigeon.png')} style={styles.pigeon}/>
								</Button>
								<Button transparent>
									<Icon name='data-usage' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
								</Button>
								<Button transparent onPress={()=>{setMainModalVisible(!mainModalVisible)}}>
									<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
									<View style={styles.centeredView}>
										<Modal
										animationType="fade"
										transparent={true}
										visible={mainModalVisible}
										onRequestClose={() => {
											setMainModalVisible(!mainModalVisible);
										}}
										>
										<View style={styles.centeredView}>
											<View style={styles.modalView}>
												<ListItem noBorder button onPress={() => {setMainModalVisible(!mainModalVisible);navigation.navigate('Settings')}}>
													<Text style={styles.textStyle}>Settings</Text>
												</ListItem>
												<ListItem noBorder button onPress={() => setMainModalVisible(!mainModalVisible)}>
													<Text style={styles.textStyle}>Piegon Web</Text>
												</ListItem>
												<ListItem noBorder button onPress={() => setMainModalVisible(!mainModalVisible)}>
													<Text style={styles.textStyle}>Unread Messages</Text>
												</ListItem>
											</View>
										</View>
										</Modal>
									</View>
								</Button>
							</Right>
						</Header>
					</View>
                    <View>
						<ScrollView horizontal={true}>
							<Header noLeft style={styles.chatPageSecondHeader} noBorder>
							<Body>
								<Button transparent onPress={() =>{navigation.navigate('Group',{id:route.params.id})}}>
									<Icon name="group-add" type="MaterialIcons" style={{fontSize:39,color:"black"}}/>
								</Button>
							</Body>
							<Body>
								<Button transparent onPress={() =>{navigation.navigate('Contact')}}>
									<Icon name="person-add" type="MaterialIcons" style={{fontSize:39,color:"black"}}/>
								</Button>
							</Body>
							<Body>
								{!aeroplanemode ? (
									<Button transparent onPress={() =>{setAeroplanemode(!aeroplanemode)}}>
										<Icon name="airplanemode-active" type="MaterialIcons" style={{fontSize: 39,color:"black"}}/>
									</Button>
									) : (
									<Button transparent onPress={() =>{setAeroplanemode(!aeroplanemode)}}>
										<Icon name="airplanemode-off" type="MaterialIcons" style={{fontSize: 39,color:"grey"}}/>
									</Button>
								)}
							</Body>
							<Body onPress={() =>{navigation.navigate('Search')}} >
								<Button transparent onPress={() =>{navigation.navigate('Search')}}>
									<Icon name="search" type="MaterialIcons" style={{fontSize: 39,color:"black"}}/>
								</Button>
							</Body>
							<Body onPress={() =>{navigation.navigate('Reminder')}} >
								<Button transparent onPress={() =>{navigation.navigate('Reminder')}}>
									<Icon name="calendar" type="Octicons" style={{fontSize: 38,color:"black"}}/>
								</Button>
							</Body>
							<Body onPress={() =>{navigation.navigate('Schedule')}} >
								<Button transparent onPress={() =>{navigation.navigate('Schedule')}}>
									<Icon name="send" type="MaterialIcons" style={{fontSize: 36,color:"black"}}/>
								</Button>
							</Body>
							<Body onPress={() =>{navigation.navigate('Message')}} >
								<Button transparent onPress={() =>{navigation.navigate('Message')}}>
									<Icon name="chat" type="MaterialIcons" style={{fontSize: 36,color:"black"}}/>
								</Button>
							</Body>
							<Body onPress={() =>{navigation.navigate('Bluetooth')}}>
								<Button transparent onPress={() =>{navigation.navigate('Bluetooth')}}>
									<Icon name="bluetooth" type="MaterialIcons" style={{fontSize: 36,color:"black"}}/>
								</Button>
							</Body>
						</Header>
						</ScrollView>
					</View>
                    <Tabs initialPage={0}
						tabBarBackgroundColor="#05F8EC"
						tabContainerStyle={{elevation:0}}
						tabBarUnderlineStyle={styles.tabBarUnderline}
					>
						<Tab 
							heading={
							<TabHeading style={{backgroundColor:"#05F8EC"}}>
								<Text style={[styles.textColor,{color:"black"}]}>CHATS </Text>
								<Badge style={styles.badge}>
									<Text style={styles.badgeText}>2</Text>
								</Badge>
							</TabHeading>}>
							<Container>
								<FlatList
									keyExtractor={item => item.id} 
									renderItem={({item}) => item.phoneNumbers !== undefined ? <Item data={item}/> : <View></View>}
									data={allContacts} 
								/> 
						</Container>
						</Tab>
						<Tab 
							heading={
								<TabHeading style={{backgroundColor:"#05F8EC"}} >
									<Text style={styles.textColor}>GROUPS</Text>
								</TabHeading>}
							>
							<GroupTab screenProps={route.params.id}/>
						</Tab>
						<Tab 
							heading={
								<TabHeading style={{backgroundColor:"#05F8EC"}}>
									<Text style={styles.textColor}>CALLS</Text>
								</TabHeading>}
							>
							<Calls/>
						</Tab>
					</Tabs>
            </Container>
        </Container>
    )
}
