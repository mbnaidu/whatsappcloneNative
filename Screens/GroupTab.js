import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Title, View, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Thumbnail, Badge, Fab } from 'native-base';
import { ScrollView, ActivityIndicator,RefreshControl } from 'react-native';
import styles from '../Styles/First';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import * as SQLite from "expo-sqlite";



function openDatabase() {
	const db = SQLite.openDatabase("13.db");
	return db;
	}
	const db = openDatabase();

const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function GroupTab({screenProps}) {
		const [items, setItems] = React.useState(null);
    // const [groups,setGroups] = useState([]);
    // useEffect(() => {
    //     const data = {
    //         id: screenProps,
    //     }
    //     axios.post('http://192.168.29.85:5000/getgroups', {data}).then(
    //         function(res) {
    //             if(res.data) {
	// 				setGroups(res.data)
    //             }
    //         }
    //     )
	// },[])
	React.useEffect(() => {
		db.transaction((tx) => {
		tx.executeSql("select * from totalgroups", [], (_, { rows: { _array } }) => setItems(_array)
			);
		});
	},);
	const navigation = useNavigation();
	const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
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
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
				>
				{items === null || items.length === 0 ? <View style={{marginTop:"50%"}}>
					<Text style={{alignSelf:"center"}}>No data</Text>
					<Text style={{alignSelf:"center"}}>Pull down to refresh</Text>
				</View> : (
					items.map((m)=>{
					return(
						<ListItem key={m.id} noBorder button onPress={() =>{navigation.navigate('GroupPage',{groupid:m.id,groupname:m.name})}}> 
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
