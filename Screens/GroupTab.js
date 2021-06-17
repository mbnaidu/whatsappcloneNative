import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Title, View, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Thumbnail, Badge, Fab } from 'native-base';
import { ScrollView, ActivityIndicator } from 'react-native';
import styles from '../Styles/First';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import * as SQLite from "expo-sqlite";



function openDatabase() {
	const db = SQLite.openDatabase("2.db");
	return db;
	}
	const db = openDatabase();


export default function GroupTab({screenProps}) {
		const [items, setItems] = React.useState(null);
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
	React.useEffect(() => {
		db.transaction((tx) => {
		tx.executeSql("select * from totalgroups", [], (_, { rows: { _array } }) => setItems(_array)
			);
		});
	},);
	const navigation = useNavigation();
	return (
		<Container>
            {/* <ScrollView>
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
			</ScrollView> */}
			<ScrollView>
				{items === null ? <ActivityIndicator large color="red" /> : (
					items.map((m)=>{
					return(
						<ListItem key={m.id} noBorder button onPress={() =>{navigation.navigate('GroupPage',{groupid:m.id,admin:groups.number,groupname:m.name})}}> 
								<Thumbnail
									source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
								></Thumbnail>
								<Body>
									<Text>  {m.name}</Text>
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
				)}
			</ScrollView>
		</Container>
	)
}
