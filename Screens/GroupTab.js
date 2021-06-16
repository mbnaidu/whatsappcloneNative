import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Title, View, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Thumbnail, Badge, Fab } from 'native-base';
import { ScrollView, FlatList } from 'react-native';
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
					res.data.groups.map((m)=>{
						const data1 = {
							id:m
						}
						axios.post('http://192.168.43.212:5000/getallgroups',{data1}).then(
							function(res) {
								if(res.data) {
									setGroups([...groups, res.data])
								}
							}
						)
					},[])
                }
            }
        )
	},[])
    const Group = (data) =>{
        // data.data.groups[0].groupname  data.data.groups[0].persons
		return(
			<View>
				<View style={styles.listcontainer}>
				<ListItem noBorder button onPress={() =>{navigation.navigate('GroupPage',{groupname:data.data.groups[0].groupname,persons:data.data.groups[0].persons})}}> 
					<Thumbnail
						source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
					></Thumbnail>
					<Body>
						<Text>  {data.data.groups[0].groupname}</Text>
					</Body>
					<Right>
						<Text note style={{color:"black"}}>3:23 pm</Text>
						<Badge style={styles.badgeChats}>
							<Text style={styles.badgeChatsText}>1</Text>
						</Badge>
					</Right>
				</ListItem>
			</View>
			</View>
		)
	}
	const navigation = useNavigation();
	return (
		<Container>
            <FlatList
                keyExtractor={item => item.id} 
                renderItem={({item}) => <Group data={item}/> }
                data={groups} 
            /> 
		</Container>
	)
}
