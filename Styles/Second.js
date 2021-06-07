import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Chat Header
    chatBody:{
        paddingLeft:30,
    },
    chatBodyTextHeading1:{
        color:"snow",
        fontWeight:"bold",
        fontSize:18,
    },
    chatBodyTextHeading2:{
        color:"snow",
        fontSize:11,
    },
    headerBackgroundColor:{
        backgroundColor:"#075E54"
    },
    // Chat Footer
    chatFooter:{
        width:"100%",
        height:"100%",
        backgroundColor:'#BFA5A5',
    },
    // search bar
    searchSection: {
        marginBottom:50,
        width:300,
        height:50,
        alignSelf:"stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:50,
    },
    emojiicon: {
        alignSelf:"auto",
        marginLeft:-20,
        marginRight:10,
        height:30,
        width:30,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius:50,
        fontSize:17,
    },
    // speaker
    speaker:{
        marginBottom: 45,
        backgroundColor:"#075E54"
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
        backgroundColor:"#075E54"
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
        backgroundColor:"#075E54",
        height:80,
    },
    // message box
    messageSenderBox:{
        backgroundColor:"#DCF8C5",
        marginRight:20,
        borderRadius:5,
        padding:10,
        marginTop:10
    }, 
    messageUserBox:{
        backgroundColor:"white",
        marginRight:20,
        borderRadius:5,
        padding:10,
        marginTop:10
    }, 
})