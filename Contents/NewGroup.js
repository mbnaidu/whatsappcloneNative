import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,Input, Fab, View, ListItem, Card } from 'native-base';
import { ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import styles from '../Styles/First';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import * as SQLite from "expo-sqlite";
import AsyncStorage from '@react-native-async-storage/async-storage';


function openDatabase() {
	const db = SQLite.openDatabase("3.db");
	return db;
	}
	const db = openDatabase();

export default function NewGroup({navigation,route}) {
	const [groupName,setGroupName] = useState('');
	const [group,setGroup] = React.useState(null);
	const [forceUpdate, forceUpdateId] = useForceUpdate();
	const [forceUpdate1, forceUpdateId1] = useForceUpdate1();
	const [type,setType] = useState('');
	const [totalGroups,setTotalGroups] = useState();
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
	const groups = () => {
        const data = {
            id: route.params.id,
			groups:{
				persons:route.params.list,
				groupname:groupName
			}
        }
        axios.post('http://192.168.43.212:5000/creategroup', {data}).then(
            function(res) {
                if(res.data) {
					// console.log('group id',res.data[0],'persons',res.data[1],'admin',res.data[2]);
					const datas = {
						groupid:res.data[0],
						userid:res.data[2],
					}
                    axios.post('http://192.168.43.212:5000/admingroup', {datas}).then(
						function(res) {
							if(res.data) {
								// console.warn(res.data)
							}
						}
					)
					res.data[1].map((m)=>{
						const data1 = {
							groupid:res.data[0],
							number:m.number,
						}
						axios.post('http://192.168.43.212:5000/usercheck', {data1}).then(
							function(res) {
								if(res.data) {
									// console.warn(res.data)
								}
							}
						)
					})
                }
            }
        )
    }
	React.useEffect(() => {
		db.transaction((tx) => {
		tx.executeSql(
			"create table if not exists totalgroups (id integer primary key not null, name text);"
		);
		});
	}, []);
	
	const offlinegroups = async () =>{
		db.transaction(
			(tx) => {
				tx.executeSql("insert into totalgroups (name) values (?)", [groupName]);
			},
			null,
			forceUpdate1
			);
		db.transaction(
			(tx) => {
				tx.executeSql(`create table if not exists ${groupName} (id integer primary key not null,phoneNumber int,name text)`);
			},
			);
			route.params.list.map((m)=>{
				db.transaction(
					(tx) => {
						tx.executeSql(`insert into  ${groupName} (phoneNumber, name) values (?, ?)`, [m.number,m.name]);
						tx.executeSql(`select * from  ${groupName}`, [], (_, { rows: { _array } }) => setGroup(_array)
						);
					},
					null,
					forceUpdate
					);
				})
				navigation.navigate('Chat')
	}
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
							<Input placeholder="Type group subject here.." style={{ borderBottomColor: '#000', borderBottomWidth: 1,marginBottom:23 }} onChangeText={(txt)=>{setGroupName(txt)}}/>
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
			<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{offlinegroups()}}>
				<Icon name="check" type="MaterialIcons" style={{color:"black"}} button onPress={()=>{offlinegroups()}}/>
			</Fab>
		</Container>
	)
	function useForceUpdate() {
		const [value, setValue] = useState(0);
		return [() => setValue(value + 1), value];
	}
function useForceUpdate1() {
		const [value, setValue] = useState(0);
		return [() => setValue(value + 1), value];
	}
}