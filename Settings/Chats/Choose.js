import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Fab, ListItem,CheckBox,Badge } from 'native-base';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from '../../Styles/First';


export default function Choose({navigation}) {
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
	return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigation.navigate('History')}}>
							<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigation.navigate('History')}} style={{color:"#000000"}}>Send chat to...</Title>
						<Text style={{color:"#000000"}}>No contacts selected</Text>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
                        <Button transparent>
							<Icon name='playlist-check' type="MaterialCommunityIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Right>
				</Header>
				<Container>
					<FlatList
						keyExtractor={item => item.id} 
						renderItem={({item}) => 
						<View style={styles.listcontainer}>
							<ListItem noBorder button >
								<Thumbnail
									source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
								></Thumbnail>
								<Body>
									<Text style={{fontFamily:"notoserif"}}>  {item.name}</Text>
								</Body>
								<Right>
						<CheckBox color="red"  style={{marginRight:25}}/>
						</Right>
							</ListItem>
						</View>}
						data={allContacts} 
						/> 
				</Container>
                <Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigation.navigate('History')}}>
					<Icon name="check" type="MaterialIcons" style={{fontSize:28,color:"#000000"}}/>
				</Fab>
			</Container>
		);
}
