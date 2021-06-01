import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, TabHeading, Badge } from 'native-base';
import { StatusBar,Text } from 'react-native';
import styles from '../Styles';
import Calls from '../Screens/Calls';
import Chats from '../Screens/Chats';
import Status from '../Screens/Status';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
		<Container>
			<Header noLeft style={styles.headerBackgroundColor}>
				<Body>
					<Title style={styles.appTitle} button onPress={()=>{navigate('SecondPage')}}>WhatsApp</Title>
				</Body>
				<Right>
					<Button transparent>
						<Icon type="MaterialIcons" name="search"/>
					</Button>
					<Button transparent>
						<Icon type="MaterialIcons" name="more-vert"/>
					</Button>
				</Right>
			</Header>
			<Tabs initialPage={1}
				tabBarBackgroundColor="#075E54"
				tabContainerStyle={{elevation:0}}
				tabBarUnderlineStyle={styles.tabBarUnderline}
			>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Icon name="photo-camera" type="MaterialIcons" style={{color:"snow"}}/>
						</TabHeading>}>
					<Text style={{
						textAlign:"center",
						textAlignVertical:"center",
						flex:1
						}}>
						Camera
					</Text>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>CHATS </Text>
							<Badge style={styles.badge}>
								<Text style={styles.badgeText}>2</Text>
							</Badge>
						</TabHeading>}>
					<Chats/>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>STATUS</Text>
						</TabHeading>}>
						<Status/>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>CALLS</Text>
						</TabHeading>}>
						<Calls/>
				</Tab>
			</Tabs>
		</Container>
		);
	}
}