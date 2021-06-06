import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,ListItem, } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class Choose extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('History')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('History')}}>Choose chat</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
				<ListItem itemDivider >
					<Text>Frequently Contacted</Text>
				</ListItem>
				<ListItem avatar noBorder>
					<Left>
						<Thumbnail
							source={{uri:'https://wallpapercave.com/wp/wp1842514.jpg'}}
						></Thumbnail>
					</Left>
					<Body>
						<Text style={styles.firstText}>Hanuman</Text>
						<Text note>PUTHINATOR</Text>
					</Body>
				</ListItem>
				<ListItem itemDivider style={styles.viewedUpdate}>
					<Text>Recent chats</Text>
				</ListItem>
				<ListItem avatar noBorder>
					<Left>
						<Thumbnail
							source={{uri:'https://assets.teenvogue.com/photos/55d5ebc8ca15223514647be6/16:9/w_1422,h_800,c_limit/Charlie%20Puth%20-%20Nine%20Track%20Mind%20-%20Album%20Artwork.jpg'}}
						></Thumbnail>
					</Left>
					<Body>
						<Text style={styles.firstText}>Vinay</Text>
						<Text note >Hey there! I am using Piegon</Text>
					</Body>
				</ListItem>
			</ScrollView>
			</Container>
		);
	}
}