import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Title, View, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Thumbnail, Badge, Fab } from 'native-base';
import { ScrollView, ActivityIndicator } from 'react-native';
import styles from '../Styles/First';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

export default function GroupTab({screenProps}) {
    const [groups,setGroups] = useState([]);
    useEffect(() => {
        const data = {
            id: screenProps,
        }
        axios.post('http://192.168.43.212:5000/getgroups', {data}).then(
            function(res) {
                if(res.data) {
					setGroups(res.data)
                }
            }
        )
	},[])
	const navigation = useNavigation();
	return (
		<Container>
            <ScrollView>
				{groups.groups !== undefined ? (
					groups.groups.map((m)=>{
						return(
							<ListItem key={m} noBorder button onPress={() =>{navigation.navigate('GroupPage',{groupid:m,admin:groups.number})}}> 
								<Thumbnail
									source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
								></Thumbnail>
								<Body>
									<Text>  {JSON.stringify(m)}</Text>
								</Body>
								<Right>
									<Text note style={{color:"black"}}>3:23 pm</Text>
									<Badge style={styles.badgeChats}>
										<Text style={styles.badgeChatsText}>1</Text>
									</Badge>
								</Right>
							</ListItem>
						)
					})
				) : (<View style={{flex: 1,justifyContent: "center",marginTop: "50%",}}>
					<ActivityIndicator size="large" color="green"/>
				</View>)}
			</ScrollView>
		</Container>
	)
}
