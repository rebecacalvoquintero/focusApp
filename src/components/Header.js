import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import focusLogo from '../assets/focusLogo.png';
import ToastExample from '../ToastExample';

console.log('ToastExample', ToastExample);
ToastExample.show('Awesome', ToastExample.SHORT);
export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.logoContainer}>
                <Image
                    source={focusLogo}
                    style={styles.logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: '#21548E',
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginTop: '10%'
    }
});
