import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab, ListItem } from 'native-base';
import { ActivityIndicator, Text, ScrollView } from 'react-native';
import styles from '../Styles/First';
import axios from 'axios';

export default function Schedule({navigation,route}) {
	const [specialMessages,setSpecialMessages] = useState([]);
	React.useEffect(() => {
		const data = {
			id : route.params.id,
		} 
		axios.post('http://192.168.29.85:5000/getgroups', {data}).then(
                function(res) {
                    if(res.data) {
						setSpecialMessages(res.data.special)
                    }
                }
            )
	},[]);
	return (
		<Container >
			<Header style={styles.headerBackgroundColor} button>
				<Left>
					<Button transparent onPress={()=>{navigation.navigate('Chat')}}>
						<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
					</Button>
				</Left>
                    <Title  onPress={()=>{navigation.navigate('Chat')}} style={{marginTop:13,color:"black"}}>Scheduled Messages</Title>
				<Right>
					<Button transparent>
						<Icon name='search' type="MaterialIcons" style={{fontSize: 28,color:"black"}} />
					</Button>
				</Right>
			</Header>
			<Container>
				<ScrollView vertical={true}>
					{specialMessages !== null ? (
						specialMessages.map((m)=>{
						return(
							<ListItem key={m.message} style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
								<Button transparent>
									<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
								</Button>
								<Body>
									<Title style={{color:"#000000"}}>{m.message}</Title>
									<Text style={{color:"#000000"}}>{"Date : "+m.date+" Time : "+ m.time}</Text>
								</Body>
							</ListItem>
						)
					})
					) : <ActivityIndicator large color="red" />}
				</ScrollView>
			</Container>
			<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}}  onPress={()=>{navigation.navigate('QuickSchedule',{senderid:route.params.id})}}>
				<Icon name="add" type="MaterialIcons" style={{fontSize:28,color:"#000000"}}button onPress={()=>{navigation.navigate('QuickSchedule',{senderid:route.params.id})}}/>
			</Fab>
		</Container>
	)
}
