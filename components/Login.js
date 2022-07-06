import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, Animated, Easing} from 'react-native';



const Login = () =>{
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUser = text => setUsername(text);
    const onChangePass = text => setPassword(text);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const YAnim = useRef(new Animated.Value(80)).current;

    const nextScreen = () =>{
        setShowLogin(true);
        fadeAnim.setValue(0);
        YAnim.setValue(80);
        Animated.timing(
            YAnim,
            {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
                easing: Easing.ease
            }
        ).start();
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.ease
            }
        ).start();
    }

    return(
        <View>
            <ImageBackground source={require('../assets/LoginBackground.jpg')} resizeMode='cover' style={styles.background}>
                {
                    !showLogin ? (
                        <TouchableOpacity style={styles.background} onPress={()=>nextScreen()}>
                            <Image source={require('../assets/Logo.png')} style={styles.logo} />
                            <Text style={styles.tapText}>Tap anywhere to start</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.background}>
                            <Animated.View style={{transform: [{translateY: YAnim}]}}>
                                <Image source={require('../assets/Logo.png')} style={styles.logo} />
                            </Animated.View>
                            <Animated.View style={[styles.animatedView, {opacity: fadeAnim}]}>
                                <TextInput
                                    style={styles.textInput}
                                    value={Text}
                                    placeholder="Username"
                                    onChangeText={onChangeUser}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    value={Text}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={onChangePass}
                                />
                                <TouchableOpacity style={styles.loginButton} onPress={()=>setShowLogin(false)}>
                                    <Text style={styles.loginText}>Login</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    )
                }
                
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tapText:{
        color: 'rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        bottom: 35,
        fontWeight: '700',
        fontSize: 15
    },
    textInput:{
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 50,
        width: '75%',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    loginButton:{
        backgroundColor: 'red',
        borderRadius: 50,
        width: '25%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    loginText:{
        color: 'rgba(255, 255, 255, .75)',
        fontSize: 18,
        fontWeight: '700'
    },
    animatedView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Login;