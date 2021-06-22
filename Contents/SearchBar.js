import { Icon, Item,Input,Container,Header, ListItem, Thumbnail, Right, Body, Badge, Left, } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Text,ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from '../Styles/First';


export default function SearchBar() {
    const [allContacts,setAllContacts] = useState([]);
    const [filterd,setFilterd] = useState([]);
	useEffect(() => {
    (async () => {
		const { status } = await Contacts.requestPermissionsAsync();
		if (status === 'granted') {
			const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.PhoneNumbers],
			});
			if (data.length > 0) {
			setAllContacts(data);
            setFilterd(data);
			}
		}
		})();
	}, []);
    const search = (txt) => {
        console.warn(txt)
    }
    return (
        <Container>
            <Header searchBar rounded style={{backgroundColor:"#05F8EC",alignItems: "center"}}>
                <Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black",marginRight: 5}}/>
                <Item>
                    <Input placeholder="search . . ." onChangeText={(txt)=>{search(txt)}}/>
                    <Icon name='search' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
                </Item>
            </Header>
            <ScrollView>
                {filterd.map((m)=>{
                    return(
                        <ListItem noBorder button> 
                            <Left>
                                <Thumbnail
                                source={require('../Assets/userProfile.png')}
                            ></Thumbnail>
                            </Left>
                            <Body>
                                <Text>{m.phoneNumbers === undefined ? '' : m.name}</Text>
                                <Text>{m.phoneNumbers === undefined ? '' : m.phoneNumbers[0].number}</Text>
                            </Body>
                        </ListItem>
                    )
                })}
            </ScrollView>
        </Container>
    )
}
