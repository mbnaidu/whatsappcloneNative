import * as MediaLibrary from 'expo-media-library'
import { Body, Button,Container,Fab,Header,Icon,Left,ListItem,Right,Text,Title,View } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView } from 'react-native'

export default function Album() {
    const [picked,setPicked] = useState([]);
    var k =5;
    useEffect(() => {
        (async () => {
            let { status } = await MediaLibrary.requestPermissionsAsync()
            let media = await MediaLibrary.getAssetsAsync({
                MediaType: ['photo'],
            })
            let video = await MediaLibrary.getAssetInfoAsync(media.assets[1])
                setPicked(media.assets)
            })();
    }, []);
    return (
        <Container >
				<Header  button>
					<Left>
						<Button transparent onPress={()=>{_mediaLibraryAsync()}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Chat')}}>All Reminders</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28}} />
						</Button>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}} />
						</Button>
					</Right>
				</Header>
				<View>
					<ScrollView horizontal={true}>
						{picked.map((m)=>{
                            return(
                                <Image source={{ uri: m.uri }} style={{ width: 200, height: 200 }} />
                            )
                        })}
					</ScrollView>
                </View>
				<Fab position="bottomRight" style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('QuickReminder')}}>
					<Icon name="add" type="MaterialIcons" button onPress={()=>{navigate('QuickReminder')}}/>
				</Fab>
			</Container>
    );
}
