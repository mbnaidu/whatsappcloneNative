import { Button, Card,CardItem, Body, Right} from 'native-base';
import React, { useEffect, useState } from 'react'
import { Image, Linking, ActivityIndicator, View, Text, } from 'react-native'
import styles from '../Styles/RequirementsStyles/requirements';
import { Camera } from 'expo-camera';
import * as Contacts from 'expo-contacts';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Requirements = ({navigation}) => {
    const [agree,setAgree] = useState(false);
    const [contact,setContact] = useState(false);
    const [camera,setCamera] = useState(false);
    const [media,setMedia] = useState(false);
    const [login,setLogin] = useState('k');
    useEffect(() => {
        (async () => {
        try {
                    const jsonValue = await AsyncStorage.getItem('@storage_Key');
                    setLogin(jsonValue)
                    return jsonValue != null ? navigation.navigate('Trail',{id: jsonValue}) : null;
                } catch(e) {
                    console.warn(e)
                }
        })();
    }, []);

    const contacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if(status === 'granted'){
            setContact(true);
        }
        else{
            setContact(false)
        }
    }

    const medias = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status === 'granted'){
            setMedia(true);
        }
        else{
            setMedia(false)
        }
    }

    const cameras = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if(status === 'granted'){
            setCamera(true);
        }
        else{
            setCamera(false)
        }
    }

    if(!agree){
        return (
        <View style={styles.container}>
            <Button style={[styles.circle,{marginBottom: 20}]} transparent >
                <Image style={styles.icon} source={require('../Assets/pigeon.png')}/>
            </Button>
            <Text style={styles.text}>Welcome to PIEGEON</Text>
            <Text style={styles.text}>Tap on Agree &amp; Continue to accept</Text>
            <Text style={styles.text} >PIEGEON
                <Text style={{color: 'green'}}
                    onPress={() => Linking.openURL('http://google.com')} >
                    -    Terms of services &amp; privacy policy
                </Text>
            </Text>
            {login !== 'k' ? (
                <Button style={styles.button} onPress={() =>{setAgree(true)}}>
                <Text style={styles.buttontext}>Agree &amp; Continue</Text>
            </Button>
            ) : <View></View>}
        </View>
    )
    }
    else{
        return (
        <View style={styles.container}>
            {contact && media && camera ? <Text></Text> : (<Text style={styles.text}>Allow all to continue</Text>) }
            <Card style={styles.card} >
                <CardItem button onPress={() =>{contacts()}}>
                    <Body>
                        <Text>
                            Contacts
                        </Text>
                    </Body>
                    <Text style={styles.text}>{contact ? "✔️" : "❌"}</Text>
                </CardItem>
            </Card>
            <Card style={styles.card} >
                <CardItem button onPress={() =>{medias()}}>
                    <Body>
                        <Text>
                            Media
                        </Text>
                    </Body>
                    <Text style={styles.text}>{media ? "✔️" : "❌"}</Text>
                </CardItem>
            </Card>
            <Card style={styles.card} >
                <CardItem button onPress={() =>{cameras()}}>
                    <Body>
                        <Text>
                            Camera
                        </Text>
                    </Body>
                    <Text style={styles.text}>{camera ? "✔️" : "❌"}</Text>
                </CardItem>
            </Card>
            {contact && media && camera ? 
                (
                    <Button style={styles.signupButton} onPress={() =>{navigation.navigate('Login')}}>
                        <Text style={styles.buttontext}>NEXT</Text>
                    </Button>
                )
                : 
                <Text></Text>
            }
        </View>
    )
    }
}

export default Requirements

