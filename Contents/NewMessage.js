import { Body, Button, Container, Header, Icon, Input, Item, Label, Left, ListItem, Picker, Right, Thumbnail, Title } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from '../Styles/First';



export default function NewMessage() {
    const [allUsers,setAllUsers] = useState([]);
    useEffect(() => {
		axios.post('http://10.0.2.2.:5000/getallusers').then(
                function(res) {
                    if(res.data) {
						setAllUsers(res.data)
                    }
                }
            )
    }, [])
    const navigation = useNavigation();
    return (
        <Container>
            <Header style={{backgroundColor:"#075E54",width:"100%"}} button>
                <Left>
                    <Button transparent onPress={() => navigation.navigate('Chat')}>
                        <Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"#ffffff"}}/>
                    </Button>
                </Left>
                <Body>
                    <Title onPress={() => navigation.navigate('Chat')}>New Chat</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() =>{console.log(allUsers)}}>
                        <Icon name='search' type="MaterialIcons" style={{fontSize: 28}}/>
                    </Button>
                    <Button transparent onPress={() =>{console.log(allUsers)}}>
                        <Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
                    </Button>
                </Right>
            </Header>
            <ScrollView>
				<ListItem itemDivider>
					<Text>All Contacts</Text>
				</ListItem>
				{allUsers.map((user) =>{
                    return(
                        <ListItem avatar noBorder key={user._id} onPress={() =>{navigation.navigate('Trail',{id:user._id})}}>
                            <Left>
                                <Thumbnail
                                    source={{uri:'https://assets.teenvogue.com/photos/55d5ebc8ca15223514647be6/16:9/w_1422,h_800,c_limit/Charlie%20Puth%20-%20Nine%20Track%20Mind%20-%20Album%20Artwork.jpg'}}
                                ></Thumbnail>
                            </Left>
                            <Body>
                                <Text style={styles.firstText}>{user.username}</Text>
                            </Body>
                        </ListItem>
                    )
                })}
			</ScrollView>
		</Container>
    )
}
