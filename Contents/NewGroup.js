import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,Input, Fab, View, ListItem, Card } from 'native-base';
import { ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import styles from '../Styles/First';
import * as ImagePicker from 'expo-image-picker';


export default function NewGroup({navigation,route}) {
	const [type,setType] = useState('');
    const [URI,setURI] = useState('https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png');
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        setType(result.type);
        setURI(result.uri);
    };
	return (
		<Container style={{backgroundColor:"#"}}>
			<Header style={styles.headerBackgroundColor} button>
				<Left>
					<Button transparent onPress={()=>{navigation.navigate('Group')}}>
						<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
					</Button>
				</Left>
				<Body>
					<ListItem noBorder button onPress={()=>{navigation.navigate('Group')}}>
						<Title style={{color:"black"}}>
							Added paritcipants
						</Title>
					</ListItem>
				</Body>
			</Header>
			<Card style={{height:120}}>
				<ListItem avatar noBorder button style={{marginTop:15}}>
					<TouchableWithoutFeedback onPress={() =>{pickImage()}}>
						<Thumbnail button source={{uri:URI}}></Thumbnail>
					</TouchableWithoutFeedback>
					<View style={{marginTop:18}}>
						<Body style={{marginLeft:20}}>
							<Input placeholder="Type group subject here.." style={{ borderBottomColor: '#000', borderBottomWidth: 1,marginBottom:23 }}/>
						</Body>
					</View>
					<Right>
						<Icon name='emoji-emotions' type="MaterialIcons" style={{fontSize: 28,marginTop:13,marginLeft:30}}/>
					</Right>
				</ListItem>
				<Text style={{marginLeft:90,fontSize:12,marginTop:-10}}>Provide a group subject and optional icon</Text>
			</Card>
			<ScrollView>
				<View style={{marginLeft:10}}>
					<Text>No.of paritcipants : {route.params.list.length}</Text>
						{route.params.list.map((m)=>{
							return(
								<ListItem noBorder button key={m.id}>
									<Thumbnail
								source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
									></Thumbnail>
									<Body>
								<Text style={{fontFamily:"notoserif"}}>  {m.name}</Text>
									</Body>
								</ListItem>
							)
						})}
				</View>
			</ScrollView>
			<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigation.navigate('Chat')}}>
				<Icon name="check" type="MaterialIcons" style={{color:"black"}} button onPress={()=>{navigation.navigate('Chat')}}/>
			</Fab>
		</Container>
	)
}