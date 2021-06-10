import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback,} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { Body, Button, Container, Fab, Icon, ListItem, Thumbnail } from "native-base";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';


    const WINDOW_HEIGHT = Dimensions.get("window").height;
    const WINDOW_WIDTH = Dimensions.get("window").width;
    const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
    const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
    var SampleArray = ["ONE", "TWO"] 

export default function Capture() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const navigation = useNavigation();
    const [picked,setPicked] = useState([]);
    const [show,setShow] = useState(false)
    // useEffect(() => {
    // (async () => {
    //         const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    //     if (permission.status !== 'granted') {
    //         const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (newPermission.status === 'granted') {
    //             const newPermission = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    //             if (newPermission.status === 'granted') {

    //             }
    //         }
    //     } else {
    //     }
    // })();
    //     }, []);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [isPreview, setIsPreview] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isVideoRecording, setIsVideoRecording] = useState(false);
    const [videoSource, setVideoSource] = useState(null);
    const [flashMode,setFlashMode] = useState(false);
    const cameraRef = useRef();
    useEffect(() => {
        (async () => {
                let media = await MediaLibrary.getAssetsAsync({
                    mediaType: ['photo']
                })
                let videos = await MediaLibrary.getAssetsAsync({
                    mediaType: ['video']
                })
                for(var i = 0; i < media.assets.length;i++){
                    picked.push(media.assets[i])
                }
                for(var i = 0; i < videos.assets.length;i++){
                    picked.push(videos.assets[i])
                }
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
        })();
    }, []);
    const onCameraReady = () => {
        setIsCameraReady(true);
    };
    const takePicture = async () => {
        if (cameraRef.current) {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        const source = data.uri;
        if (source) {
            await cameraRef.current.pausePreview();
            setIsPreview(true);
            console.log("picture source", source);
            MediaLibrary.saveToLibraryAsync(source)
        }
        }
    };
    const recordVideo = async () => {
        if (cameraRef.current) {
        try {
            const videoRecordPromise = cameraRef.current.recordAsync();
            if (videoRecordPromise) {
            setIsVideoRecording(true);
            const data = await videoRecordPromise;
            const source = data.uri;
            if (source) {
                setIsPreview(true);
                console.log("video source", source);
                setVideoSource(source);
            }
            }
        } catch (error) {
            console.warn(error);
        }
        }
    };
    const stopVideoRecording = () => {
        if (cameraRef.current) {
        setIsPreview(false);
        setIsVideoRecording(false);
        cameraRef.current.stopRecording();
        }
    };
    const switchCamera = () => {
        if (isPreview) {
        return;
        }
        setCameraType((prevCameraType) =>
        prevCameraType === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
    };
    const cancelPreview = async () => {
        await cameraRef.current.resumePreview();
        setIsPreview(false);
        setVideoSource(null);
    };
    const renderCancelPreviewButton = () => (
        <View>
            <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
                <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
                <View
                    style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
                />
            </TouchableOpacity>
            <View style={[styles.textStyle]}>
                <Button style={{backgroundColor:"#075E54",height:60,width:60,alignSelf:"center",marginLeft:200,borderRadius:50,paddingLeft:1}} onPress={cancelPreview}>
                    <Icon name="send" type="MaterialIcons" style={{fontSize: 28,color:"white"}}/>
                </Button>
            </View>
        </View>
    );
    const renderVideoPlayer = () => (
        <Video
        source={{ uri: videoSource }}
        shouldPlay={true}
        style={styles.media}
        />
    );
    const renderVideoRecordIndicator = () => (
        <View style={styles.recordIndicatorContainer}>
        <View style={styles.recordDot} />
        <Text style={styles.recordTitle}>{"Recording..."}</Text>
        </View>
    );
    const [image, setImage] = useState(null)
    const [type, setType] = useState(null);
    const [URI,setURI] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        console.log(mediaTypes)
        console.log(result.type);
        setType(result.type);
        setURI(result.uri);
        if (!result.cancelled) {
        setImage(result.uri);
        }
    };
    const renderCaptureControl = () => (
        <View style={styles.containerMain}>
            <View style={styles.bottomView}>
                <View style={{height:100}}>
					<ScrollView horizontal={true}>
						{picked.map((m)=>{
                            return(
                                <Button transparent onPress={()=>{setShow(true);setURI(m.uri);setType(m.mediaType)}}>
                                    <Image key={m.uri} source={{ uri: m.uri }} style={{ width: 90, height: 90,marginRight:5 }}/>
                                </Button>
                            )
                        })}
					</ScrollView>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    disabled={!isCameraReady}
                    onLongPress={recordVideo}
                    onPressOut={stopVideoRecording}
                    onPress={takePicture}
                    style={styles.capture}
                />
                <Button transparent onPress={()=>{setFlashMode(!flashMode)}} style={{alignSelf:"flex-start",bottom:50,left:40}}>
                    <Icon name={flashMode ? "flash-on" : "flash-off"} type="MaterialIcons" style={{fontSize: 28,color:"white"}}/>
                </Button>
                <Button transparent disabled={!isCameraReady} onPress={switchCamera} style={{alignSelf:"flex-end",bottom:100,right:40}}>
                    <Icon name="md-camera-reverse-sharp" type="Ionicons" style={{fontSize: 28,color:"white"}}/>
                </Button>
            </View>
        </View>
    );
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={styles.text}>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={styles.container}>
            {show ? (<View>
                {type == 'video' ? (
                <View >
                    <Icon name="close" type="MaterialIcons" style={{fontSize: 28,color:"white",alignSelf:"flex-start",margin:30}}/>
                    <TouchableWithoutFeedback onPress={() =>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                        <Video
                        ref={video}
                        style={{width:360,height: 220,marginTop:"50%"}}
                        source={{uri: URI,}}
                        useNativeControls={true}
                        resizeMode="contain"
                        shouldPlay={true}
                        isLooping={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    </TouchableWithoutFeedback>
                    <Icon name="send" type="MaterialIcons" style={{fontSize: 38,padding:12,borderRadius:50,backgroundColor:"#075E54",color:"white",alignSelf:"flex-end",margin:30,marginTop:100}}/>
                </View>
            ) : (
                <View >
                    <Image source={{ uri: URI }} style={{ width: '100%', height: '100%' }} />
                    <Fab position="bottomRight" style={{backgroundColor:"#075E54"}}>
                        <Icon name="send" type="MaterialIcons"/>
                    </Fab>
                </View>
            )}
            </View>) : (
                <Container>
                    <Camera
            ref={cameraRef}
            style={styles.container}
            type={cameraType}
            flashMode={flashMode ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off}
            onCameraReady={onCameraReady}
            onMountError={(error) => {
            console.log("cammera error", error);
            }}
        />
        <View style={styles.container}>
            {isVideoRecording && renderVideoRecordIndicator()}
            {videoSource && renderVideoPlayer()}
            {isPreview && renderCancelPreviewButton()}
            {!videoSource && !isPreview && renderCaptureControl()}
        </View>
                </Container>
            )}
        </SafeAreaView>
    );
    }
    const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"black"
    },
    closeButton: {
        position: "absolute",
        top: 35,
        left: 15,
        height: closeButtonSize,
        width: closeButtonSize,
        borderRadius: Math.floor(closeButtonSize / 2),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c4c5c4",
        opacity: 0.7,
        zIndex: 2,
    },
    media: {
        ...StyleSheet.absoluteFillObject,
    },
    closeCross: {
        width: "68%",
        height: 1,
        backgroundColor: "black",
    },
    control: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', //Here is the trick
        bottom: 25, //Here is the trick
    },
    textStyle: {
        marginLeft:30,
        marginTop:WINDOW_HEIGHT-100,
        color: '#fff',
        fontSize: 18,
    },
    capture: {
        backgroundColor: "#f5f6f5",
        borderRadius: 5,
        height: captureSize,
        width: captureSize,
        borderRadius: Math.floor(captureSize / 2),
        marginHorizontal: 31,
    },
    recordIndicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        top: 25,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        opacity: 0.7,
    },
    recordTitle: {
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
    },
    recordDot: {
        borderRadius: 3,
        height: 6,
        width: 6,
        backgroundColor: "#ff0000",
        marginHorizontal: 5,
    },
    text: {
        alignSelf:"flex-start",
        color: "#fff",
    },
    video: {
        justifyContent: 'center',
        width: 360,
        height: 390,
        marginBottom:-10
    },
    buttons: {
        backgroundColor: "green",
    },
    });