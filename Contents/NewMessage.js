import { Body, Button, Container, Header, Icon, Input, Item, Label, Left, ListItem, Picker, Right, Thumbnail, Title } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView,ActivityIndicator } from 'react-native'
import axios from 'axios';
import styles from '../Styles/First';
import * as Contacts from 'expo-contacts';



export default function NewMessage({navigation}) {
    const [ spinner, setSpinner ] = useState(false);

    // It will be executed before rendering

    useEffect(() => {
        setTimeout(() => setSpinner(true), 300)
    }, []);
    const [allContacts,setAllContacts] = useState([]);
	useEffect(() => {
		(async () => {
			const { data } = await Contacts.getContactsAsync({
			field: [Contacts.Fields.PhoneNumbers],
			});
			if (data.length > 0) {
                setAllContacts(data);
			}
		})();
	}, []);
    if(spinner){
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
				{allContacts.map((user) =>{
                    return(
                        <ListItem avatar noBorder key={user.id}>
                            <Left>
                                <Thumbnail
                                    source={{uri:'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}}
                                ></Thumbnail>
                            </Left>
                            <Body>
                                <Text style={styles.firstText}>{user.name}</Text>
                            </Body>
                        </ListItem>
                    )
                }
                )}
			</ScrollView>
		</Container>
    )
    }
    else{
        return(
            <View>
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
                </Container>
                <ActivityIndicator style={{alignSelf:"center",marginTop:"100%"}} size="large" color="#0000ff" />
            </View>
        )
    }
}
