import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // appbar
    appTitle:{
        fontSize:22,
        color:"snow"
    },
    createContact:{
        fontSize:18,
        color:"#075E54"
    },
    createContactSearchIcon:{
        fontSize:18,
        color:"#075E54"
    },
    headerBackgroundColor:{
        backgroundColor:"#075E54"
    },
    chatPageSecondHeader:{
        backgroundColor:"#075E54",
        height:80,
    },
    tabBarUnderline:{
        height:2
    },
    // first Text
    firstText:{
        marginTop:5,
        fontWeight:"bold"
    },
    // tabColorText
    textColor:{
        fontWeight:"bold",
        color:"snow",
        fontSize:15,
    },
    // pigeon png
    pigeon:{
        width:30,
        height:30,
    },
    // status png
    status:{
        width:24,
        height:24,
    },
    // ellipsis
    ellipsis:{
        width:24,
        height:24,
    },
    // moreVert
    moreVert:{
        width:22,
        height:22,
    },
    // badge
    badge: {
        height:24,
        width:24,
        backgroundColor:"#ECE5DD",
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center"
    },
    badgeText:{
        alignSelf:"center",
        fontSize:12,
        color:"#075E54"
    },
    //Chat Page
    badgeChats:{
        backgroundColor:"#25D366",
        height:28,
        width:28,
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center",
        marginTop: 4,
    },
    badgeChatsText:{
        fontSize:14,
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center",
        color:"snow"
    },
    // Status Page
    addStatusIcon:{
        color:"#25D366",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:35,
        bottom:-10,
        width:25,
        fontSize:23,
        marginBottom:10,
    },
    aeroplanemodeon: {
        color:"#25D366",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:55,
        bottom:-10,
        width:25,
        fontSize:23,
        marginBottom:10,
    },
    aeroplanemodeoff: {
        color:"#000000",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:55,
        bottom:-10,
        width:25,
        fontSize:23,
        marginBottom:10,
    },
    remove: {
        color:"#ffffff",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:40,
        bottom:-20,
        width:25,
        height:25,
        fontSize:23,
        marginBottom:10,
        borderRadius:50,
        backgroundColor:"#828385",
        borderWidth:2,
        borderColor:'#ffffff'
    },
    removeText:{
        color:"#000000",
        marginTop: 10,
        fontWeight:"bold",
    },
    // listitem
    listitem:{
        width:"100%",
    },
    recentUpdate:{
        marginTop:10,
    },
    viewedUpdate:{
        marginTop:10,
    },
    // bothheaders
    mediaHeader:{
        backgroundColor:"#ffffff",
        alignSelf:"flex-start"
    },
    mediaSubHeaderText:{
        color:"#075E54",fontSize:16,fontWeight:'bold',
    },
    // newGroup Header  
    newgroupheader:{
        height:100,
        backgroundColor:"#ffffff"
    },
    // select photo
    selectPhoto:{},
    // modals
    centeredView: {
        width:"100%",
        flex: 1,
        alignSelf:"flex-end",
        justifyContent: "flex-start",
    },
    modalView: {
        margin: 5,
        height:"100%",
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
    // drop down models
    dropdown:{
        flex: 1,
        alignSelf:"flex-end",
        justifyContent: "flex-start",
    },
    dropdownmodel:{
        marginTop: 130,
        marginRight: 170,
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
})
