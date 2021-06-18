import React, { useState } from 'react'
import {Label,Card,Button,ListItem,Icon,Input,Picker,Item,View, } from 'native-base'
import {Text,Image,Keyboard,TouchableWithoutFeedback} from 'react-native'
import styles from '../Styles/RequirementsStyles/login'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
    const [country,setCountry] = useState('India');
    const [code,setCode] = useState('+91');
    const [number,setNumber] = useState(0);
    
    const storeData = async (value) => {
        try {
            const jsonValue = await AsyncStorage.setItem('@storage_Key', value)
            // const jsonValu = await AsyncStorage.getItem('@storage_Key')
            // const delte = await AsyncStorage.clear();
        } catch (e) {
            console.warn(e)
        }
    }

    const signup = async () => {
        // const data = {
        //     number: number
        // }
        // axios.post('http://192.168.43.212:5000/login', {data}).then(
        //         function(res) {
        //             if(res.data.length == 0) {
		// 				axios.post('http://192.168.43.212:5000/signup', {data}).then(
		// 					function(res) {
		// 						if(res.data) {
        //                             navigation.navigate('Profile',{id:res.data})
        //                             storeData(res.data)
		// 						}
		// 					}
		// 				)
        //             }
		// 			else{
        //                 navigation.navigate('Profile',{id:res.data[0]._id})
        //                 storeData(res.data[0]._id)
		// 			}
        //         }
        //     )
        navigation.navigate('Profile',{id:number})
                        storeData(number)
    }
    return (
        <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss();}}>
            <View style={styles.container}>
                <Button style={styles.circle} transparent >
                <Image style={styles.icon} source={require('../Assets/pigeon.png')}/>
            </Button>
                {/* <Text style={styles.text}>Confirm your country code &amp; Enter phone number</Text> */}
                <Card style={styles.card}>
                    <ListItem avatar noBorder button>
                        <Item picker>
                            <Text>{code}                  </Text>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined,height: 50}}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={country}
                                onValueChange={text => {setCountry(text);setCode(text)}}
                            >
                                <Picker.Item label="India" value="+91" />
                                <Picker.Item label="America" value="+081" />
                                <Picker.Item label="China" value="+99" />
                                <Picker.Item label="Japan" value="+099" />
                            </Picker>
                        </Item>
                    </ListItem>
                    <ListItem avatar button style={{marginTop:10}}>
                        <Item floatingLabel>
                            <Label style={{color:"white",fontWeight:"bold"}}>Phone Number</Label>
                        <Input onChangeText={text=>{setNumber(text)}}/>
                        </Item>
                    </ListItem>
                </Card>
                <Button style={styles.button} onPress={() =>{signup()}}>
                        <Text style={styles.buttontext}>NEXT</Text>
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

