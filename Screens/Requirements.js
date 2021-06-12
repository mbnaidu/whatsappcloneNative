import { Button, Card,CardItem, Body, Right} from 'native-base';
import React, { useState } from 'react'
import { Image, Linking, ActivityIndicator, View, Text, } from 'react-native'
import styles from '../Styles/requirements';
import { Camera } from 'expo-camera';
import * as Contacts from 'expo-contacts';



const Requirements = () => {
    const [agree,setAgree] = useState(true);
    const [contact,setContact] = useState(false);
    const [camera,setCamera] = useState(false);
    const [media,setMedia] = useState(false);

    const contacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if(status === 'granted'){
            setContact(true);
        }
        else{
            setContact(false)
        }
    }

    const medias = () => {
        setMedia(!media)
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
            <Button style={styles.circle} transparent >
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
            <Button style={styles.button} onPress={() =>{setAgree(true)}}>
                <Text style={styles.buttontext}>Agree &amp; Continue</Text>
            </Button>
        </View>
    )
    }
    else{
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Allow all to continue</Text>
            <Card style={styles.card} >
                <CardItem button onPress={() =>{contacts()}}>
                    <Body>
                        <Text>
                            Contacts
                        </Text>
                    </Body>
                    <Right>
                        <Text>{contact ? "✔️" : "❌"}</Text>
                    </Right>
                </CardItem>
            </Card>
            <Card style={styles.card} >
                <CardItem button onPress={() =>{medias()}}>
                    <Body>
                        <Text>
                            Media
                        </Text>
                    </Body>
                    <Right>
                        <Text>{media ? "✔️" : "❌"}</Text>
                    </Right>
                </CardItem>
            </Card>
            <Card style={styles.card} >
                <CardItem button onPress={() =>{cameras()}}>
                    <Body>
                        <Text>
                            Camera
                        </Text>
                    </Body>
                    <Right>
                        <Text>{camera ? "✔️" : "❌"}</Text>
                    </Right>
                </CardItem>
            </Card>
        </View>
    )
    }
}

export default Requirements

