import React, { useState } from 'react'
import {Label,Card,Button,ListItem,Icon,Input,Picker,Item,View, } from 'native-base'
import {Text,Image,Keyboard,TouchableWithoutFeedback} from 'react-native'
import styles from '../Styles/RequirementsStyles/login'

const Login = ({navigation}) => {
    const [country,setCountry] = useState('India');
    const [code,setCode] = useState('+91');
    const [number,setNumber] = useState(0);
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
                        <Input keyboardType={'number-pad'} onChangeText={text=>{setNumber(text)}}/>
                        </Item>
                    </ListItem>
                </Card>
                <Button style={styles.button} onPress={() =>{navigation.navigate('Profile')}}>
                        <Text style={styles.buttontext}>NEXT</Text>
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

