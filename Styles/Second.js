import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Chat Header
    chatBody:{
        backgroundColor:"#05F8EC",
        width:30,
    },
    chatBodyTextHeading1:{
        marginLeft:10,
        color:"black",
        fontWeight:"bold",
        fontSize:18,
    },
    chatBodyTextHeading2:{
        marginLeft:10,
        color:"black",
        fontSize:11,
    },
    headerBackgroundColor:{
        backgroundColor:"#05F8EC"
    },
    // Chat Footer
    chatFooter:{
        width:"100%",
        height:"100%",
        backgroundColor:'#BFA5A5',
    },
    // search bar
    searchSection: {
        marginLeft:5,
        flex: 1,
        height:50,
        alignSelf:"stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius:50,
    },
    emojiicon: {
        alignSelf:"auto",
        color:"#05F8EC",
        margin:10,
        fontSize:28
    },
    onSendEmoji: {
        alignSelf:"auto",
        color:"#05F8EC",
        margin:10,
        fontSize:30,
        borderRadius:50,
    },
    input: {
        padding:10,
        backgroundColor: '#fff',
        color: '#424242',
        fontSize:17,
        borderRadius:50,
    },
    voiceIcon:{
        padding: 10,
        borderRadius:50,
        fontSize:28,
        color:"black",
        backgroundColor:'#05F8EC'
    },
    // speaker
    speaker:{
        marginBottom: 45,
        backgroundColor:"#05F8EC"
    },
    attachment:{
        color:"#AEA3A3",
        padding:15,
        fontSize:25,
    },
    cameraalt:{
        marginRight:-20,
        color:"#AEA3A3",
    },
    // arrange
    arrange:{
        alignSelf:"stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // modals
    centeredView: {
    flex: 1,
    alignSelf:"flex-end",
    justifyContent: "flex-start",
    },
    modalView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius:5,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        elevation: 0
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        color: "#000000",
        textAlign: "left",
        fontSize:17,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    // moreicon
    moreIcon: {
        fontWeight: 'bold',
        fontSize:30,
        color:"#000000"
    },
    // bioHeader
    bioHeader: {
        backgroundColor:"#05F8EC"
    },
    // Bio Page
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        paddingTop: (Platform.OS === 'iOS') ? 20 : 0
    },
    FlatList_Item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    header_style:{
        width: '100%',
        height:400,
        backgroundColor: '#00BCD4', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    // chat page backgroundColor
    chatPageSecondHeader:{
        backgroundColor:"#05F8EC",
        height:80,
    },
    // message box
    messageSenderBox:{
        marginLeft:'20%',
        alignSelf:'flex-end',
        backgroundColor:"#DCF8C5",
        marginRight:20,
        borderRadius:5,
        padding:10,
        marginTop:10,
        marginBottom:10
    }, 
    messageUserBox:{
        marginRight:'20%',
        alignSelf:'flex-start',
        backgroundColor:"white",
        marginLeft:20,
        borderRadius:5,
        padding:10,
        marginTop:10,
        marginBottom:10
    }, 
})