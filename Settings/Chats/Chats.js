import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled:false,
            isEnabled2:true,
        };
    }
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
    call2 = () => {
		this.setState({ isEnabled2: !this.state.isEnabled2 });
	}
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Settings')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Chats</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <Text style={{fontSize: 18,color:"#075E54",margin:10,fontWeight:"bold"}}>Display</Text>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='theme-light-dark' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Display</Text>
                            <Text note>Light</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar button>
                        <Left>
                            <Button transparent>
                                <Icon name='wallpaper' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Wallpaper</Text>
                        </Body>
                    </ListItem>
                    <Text style={{fontSize: 18,color:"#075E54",margin:10,fontWeight:"bold"}}>Chat settings</Text>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='theme-light-dark' type="MaterialCommunityIcons" style={{fontSize: 0,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Enter is send</Text>
                            <Text note>Enter key will send your message</Text>
                        </Body>
                        <Right>
                        <Switch
                            trackColor={{false:'#767577', true:"#128C7E"}}
                            thumbColor={this.state.isEnabled ? '#075E54' : "#767577"}
                            value={this.state.isEnabled}
                            onChange={this.call}
                        >
                        </Switch>
                    </Right>
                    </ListItem>
                    <ListItem avatar button>
                        <Left>
                            <Button transparent>
                                <Icon name='theme-light-dark' type="MaterialCommunityIcons" style={{fontSize: 0,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Media visibility</Text>
                            <Text note>Show newly downloaded media {`\n`} in your's phone gallery.</Text>
                        </Body>
                        <Right>
                            <Switch
                                trackColor={{false:'#767577', true:"#128C7E"}}
                                thumbColor={this.state.isEnabled2 ? '#075E54' : "#767577"}
                                value={this.state.isEnabled2}
                                onChange={this.call2}
                            >
                            </Switch>
                        </Right>
                    </ListItem>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='world' type="Fontisto" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>App language</Text>
                            <Text note>Phone's language(English)</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='backup' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Chat Backup</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='history' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Chat History</Text>
                        </Body>
                    </ListItem>
				</ScrollView>
			</Container>
		);
	}
}