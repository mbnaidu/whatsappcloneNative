import React, { useState } from 'react'
import {Label,Card,Button,ListItem,Right,Input,Picker,Item,View,Thumbnail, } from 'native-base'
import {Text,Image,Keyboard,TouchableWithoutFeedback} from 'react-native'
import styles from '../Styles/RequirementsStyles/profile'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Profile = ({route,navigation}) => {
    const [username,setUsername] = useState('');
    const [type,setType] = useState('');
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
    const profile = () => {
        const data = {
            id: route.params.id,
            username: username
        }
        axios.post('http://192.168.43.212:5000/profile', {data}).then(
            function(res) {
                if(res.data) {
                    navigation.navigate('Chat',{id:route.params.id})
                }
            }
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss();}}>
            <View style={styles.container}>
                <Button style={styles.circle} transparent >
                <Image style={styles.icon} source={require('../Assets/pigeon.png')}/>
            </Button>
            <Card style={styles.card}>
                <ListItem avatar noBorder button >
                    <TouchableWithoutFeedback onPress={() =>{pickImage()}}>
                        <Thumbnail
                        large
                        source={{uri:URI}}
                    >
                    </Thumbnail>
                    </TouchableWithoutFeedback>
                </ListItem>
                <ListItem avatar button style={styles.listitem}>
                    <Item floatingLabel>
                        <Label style={{color:"white",fontWeight:"bold"}}>User Name</Label>
                    <Input keyboardType={'web-search'} onChangeText={text =>{setUsername(text)}}/>
                    </Item>
                </ListItem>
            </Card>
            <Button style={styles.button} onPress={() =>{profile()}}>
                    <Text style={styles.buttontext}>NEXT</Text>
            </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Profile

