import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Footer, Fab, View, ListItem,CheckBox } from 'native-base';
import { StatusBar, Text, Modal,ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class History extends Component {
    state = {
        // Delete Modal
            deleteModalVisible: false,
            deleteShow: false,
	};
    // Delete Modal
	setDeleteModalVisible = (visible) => {
		this.setState({ deleteModalVisible: visible });
	};
	render() {
        // Delete Modal
            const { deleteModalVisible } = this.state;
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chats')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Chats')}}>Chat History</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Choose')}}>
                        <Left>
                            <Button transparent>
                                <Icon name='send' type="FontAwesome" style={{fontSize: 30,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Export Chat</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ deleteShow: true });this.setDeleteModalVisible(!deleteModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='delete-alert' type="MaterialCommunityIcons" style={{fontSize: 30,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Delete all chats</Text>
                        </Body>
                        {!this.state.deleteShow ? (<View></View>) : (
                            <View style={styles.centeredView}>
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={deleteModalVisible}
                                    onRequestClose={() => {
                                        this.setDeleteModalVisible(!deleteModalVisible);
                                    }}
                                    >
                                    <View>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button>
                                                <Body>
                                                    <Text style={{fontSize:18,marginBottom:10}}>Are you sure you want to delete ALL chats and their messages?</Text><CheckBox color="green" checked/>
                                                    <Text style={{fontSize:16,marginLeft:50,marginTop:-23}}>Delete media in chats</Text>
                                                </Body>
                                            </ListItem>
                                            <Fab position="bottomRight" style={{backgroundColor:"#25D366"}}>
                                                <Icon name="delete" type="MaterialIcons"/>
                                            </Fab>
                                        </View>
                                    </View>
                                    <Footer style={{backgroundColor:"#ffffff"}} button onPress={() =>{this.setDeleteModalVisible(!deleteModalVisible);}}>
                                        <Text style={{fontSize:16,marginTop:10,marginLeft:300,width:"100%"}} onPress={() =>{this.setDeleteModalVisible(!deleteModalVisible);}}>Cancel</Text>
                                    </Footer>
                                </Modal>
							</View>
                        )}
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}