import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio, CheckBox } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class Choose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled:false,
            isEnabled2:true,
            displayStatus: 'Light',
            profilePhotoStatus: 'My contacts',
            aboutStatus: 'Nobody',
        };
    }
    state = {
        // LAST SEEN
            displayModalVisible: false,
            displayShow: false,
        // PROFILE PHOTO
            profilephotoshow: false,
            profilePhotoModalVisible: false,
        // ABOUT
            aboutshow: false,
            aboutModalVisible: false,
	};
    // Last Seen
	setDisplayModalVisible = (visible) => {
		this.setState({ displayModalVisible: visible });
	};
    // Profile Photo
    setProfilePhotoModalVisible = (visible) => {
		this.setState({ profilePhotoModalVisible: visible });
	};
    // About
    setAboutModalVisible = (visible) => {
		this.setState({ aboutModalVisible: visible });
	};
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
    call2 = () => {
		this.setState({ isEnabled2: !this.state.isEnabled2 });
	}
	render() {
        // last seen
            const { displayModalVisible } = this.state;
        // profile photo
            const { profilePhotoModalVisible } = this.state;
        // about
            const { aboutModalVisible } = this.state;
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
                        <Title>Choose chat</Title>
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