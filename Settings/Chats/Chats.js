import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, ListItem, Switch, Radio } from 'native-base';
import { StatusBar, Text, Modal, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendEnalbed:false,
            mediaEnabled:true,
            displayStatus: 'Light',
            fontStatus: 'Medium',
            aboutStatus: 'Large',
        };
    }
    state = {
        // LAST SEEN
            displayModalVisible: false,
            displayShow: false,
        // PROFILE PHOTO
            fontShow: false,
            fontModalVisible: false,
	};
    // Last Seen
	setDisplayModalVisible = (visible) => {
		this.setState({ displayModalVisible: visible });
	};
    // Profile Photo
    setFontModalVisible = (visible) => {
		this.setState({ fontModalVisible: visible });
	};
    send = () => {
		this.setState({ sendEnalbed: !this.state.sendEnalbed });
	}
    media = () => {
		this.setState({ mediaEnabled: !this.state.mediaEnabled });
	}
	render() {
        // last seen
            const { displayModalVisible } = this.state;
        // profile photo
            const { fontModalVisible } = this.state;
        // about
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
                        <Title onPress={()=>{navigate('Settings')}}>Chats</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <Text style={{fontSize: 18,color:"#075E54",margin:10,fontWeight:"bold"}}>Display</Text>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ displayShow: true });this.setDisplayModalVisible(!displayModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='theme-light-dark' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Display</Text>
                            <Text note >{this.state.displayStatus}</Text>
                            {!this.state.displayShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={displayModalVisible}
                                    onRequestClose={() => {
                                        this.setDisplayModalVisible(!displayModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ displayStatus: 'Light' });this.setDisplayModalVisible(!displayModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setDisplayModalVisible(!displayModalVisible);this.setState({ displayStatus: 'Light' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.displayStatus == 'Light'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Light</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ displayStatus: 'Dark' });this.setDisplayModalVisible(!displayModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ displayStatus: 'Dark' });this.setDisplayModalVisible(!displayModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.displayStatus == 'Dark'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Dark</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
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
                            thumbColor={this.state.sendEnalbed ? '#075E54' : "#767577"}
                            value={this.state.sendEnalbed}
                            onChange={this.send}
                        >
                        </Switch>
                    </Right>
                    </ListItem>
                    <ListItem avatar noBorder button>
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
                                thumbColor={this.state.mediaEnabled ? '#075E54' : "#767577"}
                                value={this.state.mediaEnabled}
                                onChange={this.media}
                            >
                            </Switch>
                        </Right>
                    </ListItem>
                    <ListItem avatar button style={{marginTop:10}} onPress={()=>{this.setState({ fontShow: true });this.setFontModalVisible(!fontModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='theme-light-dark' type="MaterialCommunityIcons" style={{fontSize: 0,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Font Size</Text>
                            <Text note >{this.state.fontStatus}</Text>
                            {!this.state.fontShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={fontModalVisible}
                                    onRequestClose={() => {
                                        this.setFontModalVisible(!fontModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ fontStatus: 'Small' });this.setFontModalVisible(!fontModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setFontModalVisible(!fontModalVisible);this.setState({ fontStatus: 'Small' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.fontStatus == 'Small'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Small</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ fontStatus: 'Medium' });this.setFontModalVisible(!fontModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ fontStatus: 'Medium' });this.setFontModalVisible(!fontModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.fontStatus == 'Medium'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Medium</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar  button onPress={() => {this.setState({ fontStatus: 'Large' });this.setFontModalVisible(!fontModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ fontStatus: 'Large' });this.setFontModalVisible(!fontModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.fontStatus == 'Large'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Large</Text>
                                                </Body>
                                                
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button onPress={()=>{navigate('Backup')}}>
                        <Left>
                            <Button transparent>
                                <Icon name='backup' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Chat Backup</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button onPress={()=>{navigate('History')}}>
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