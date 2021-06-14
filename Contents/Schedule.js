import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab, ListItem } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Schedule extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container >
				<Header style={styles.headerBackgroundColor} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
                    <Title  onPress={()=>{navigate('Chat')}} style={{marginTop:13,color:"black"}}>Scheduled Messages</Title>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28,color:"black"}} />
						</Button>
					</Right>
				</Header>
				<Container>
					<ScrollView vertical={true}>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
                            <Button transparent>
                                <Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
                            </Button>
                            <Body>
                                <Title style={{color:"#000000"}}>Reminder 1</Title>
                                <Text style={{color:"#000000"}}>Wednesday March 21 2020 </Text>
                            </Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 2</Title>
								<Text style={{color:"#000000"}}>Today</Text>
							</Body>
						</ListItem>
					</ScrollView>
				</Container>
				<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}}  onPress={()=>{navigate('QuickSchedule')}}>
					<Icon name="add" type="MaterialIcons" style={{fontSize:28,color:"#000000"}}button onPress={()=>{navigate('QuickSchedule')}}/>
				</Fab>
			</Container>
		);
	}
}