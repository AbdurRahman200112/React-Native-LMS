import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Hr from './Hr';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, Forum_400Regular } from '@expo-google-fonts/forum';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate a 2-second delay before navigating to the Drawer Navigator
        const timer = setTimeout(() => {
            navigation.replace('Drawer'); // Replace 'Drawer' with your main navigator name
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')} // Use 'require' for local images
                style={styles.logo}
            />
            <Text style={{ fontFamily: 'Forum_400Regular', color: 'white' }} className="text-xl text-white mt-6">
                Muhammad Ali Jinnah University
            </Text>
            <Hr className="my-4 bg-white h-[1px] w-3/4" />
            <Text style={{ fontFamily: 'Forum_400Regular', color: 'white' }} className="text-lg text-white">
                Chartered by Government of Sindh - Recognized by HEC
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#473f97', // Background color
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20, // Space between text and logo
    },
    logo: {
        width: 150, // Adjust logo width
        height: 150, // Adjust logo height
        resizeMode: 'contain', // Maintain aspect ratio
    },
});

export default SplashScreen;
