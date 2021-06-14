import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Footer, ListItem, View,Label,Fab } from 'native-base';
import { TouchableWithoutFeedback, Text, ScrollView, Keyboard, } from 'react-native';
import styles from '../Styles/RequirementsStyles/requirements';



export default function TypeStatus({navigation}) {
    const [status,setStatus] = useState('');
    const [format,setFormat] = useState(undefined);
    const [contains,setContains] = useState(undefined);
    const [color,setColor] = useState('#05F8EC')
    const [fontFamily,setFontFamily] = useState('Roboto');
    var colors = ['#F14C3F','#3FF18F','#3FC6F1','#9E6EEF','#EF6EED','#EF6EB6',];
    var fonts = ['sans-serif-thin','normal','notoserif','sans-serif','sans-serif-light','sans-serif-condensed','sans-serif-medium','serif','monospace',]
    return (
        <TouchableWithoutFeedback onPress={() =>(Keyboard.dismiss())}>
            <Container>
                <View style={{flex: 1,justifyContent: "center",backgroundColor:color}}>
                    <Input value={status} placeholder="Type a status . . ." style={{fontFamily:fontFamily,alignSelf:"center",fontSize: 28}} multiline onChangeText={(txt)=>{setStatus(txt)}}/>
                        <Button transparent>
							<Icon name='emoji-emotions' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
                            <TouchableWithoutFeedback onPress={()=>{setFontFamily(fonts[Math.floor(Math.random() * fonts.length)])}}>
                                <Icon name='font' type="Fontisto" style={{fontSize: 20,color:"#000000"}} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=>{setColor(colors[Math.floor(Math.random() * colors.length)])}}>
                                <Icon name='color-lens' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}} button />
                            </TouchableWithoutFeedback>
						</Button>
                </View>
                <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Chat')}}>
                    <Fab position="bottomRight" style={{backgroundColor:"#000000"}} onPress={()=>{navigation.navigate('Chat')}}>
                        <Icon name="send" type="MaterialIcons" style={{fontSize: 28,color:color}}onPress={()=>{navigation.navigate('Chat')}}/>
                    </Fab>
				</TouchableWithoutFeedback>
			</Container>
        </TouchableWithoutFeedback>
    )
}