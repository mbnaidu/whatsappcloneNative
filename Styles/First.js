import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // appbar
    appTitle:{
        fontSize:22,
        color:"black"
    },
    createContact:{
        fontSize:18,
        color:"#05F8EC"
    },
    createContactSearchIcon:{
        fontSize:18,
        color:"#05F8EC"
    },
    headerBackgroundColor:{
        backgroundColor:"#05F8EC"
    },
    chatPageSecondHeader:{
        backgroundColor:"#05F8EC",
        height:80,
    },
    tabBarUnderline:{
        height:2,
        backgroundColor:"black"
    },
    // first Text
    firstText:{
        marginTop:5,
        fontWeight:"bold"
    },
    // tabColorText
    textColor:{
        fontWeight:"bold",
        color:"black",
        fontSize:15,
    },
    // pigeon png
    pigeon:{
        width:30,
        height:30,
    },
    // status png
    status:{
        color:"#000000",
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
        fontSize:13,
        color:"black"
    },
    //Chat Page
    badgeChats:{
        backgroundColor:"#05F8EC",
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
        color:"black"
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
        fontSize:21,
        marginBottom:25,
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
        color:"#05F8EC",fontSize:16,fontWeight:'bold',
    },
    // newGroup Header  
    newgroupheader:{
        height:100,
        backgroundColor:"#ffffff"
    },
    newcontactheader:{
        height:80,
        backgroundColor:"#ffffff"
    },
    accountHeader:{
        height:70,
        marginBottom:10,
        backgroundColor:"#ffffff"
    },
    // select photo
    selectPhoto:{},
    // modals
    privacycenteredView: {
        width:"70%",
        flex: 1,
        alignSelf:"center",
        justifyContent: "center",
    },
    centeredView: {
        width:"70%",
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
