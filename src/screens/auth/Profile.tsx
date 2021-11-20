import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Profile() {
    const user = auth().currentUser;

    async function signOut() {
        try {
            await GoogleSignin.revokeAccess();
            auth().signOut();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>You're Logged In</Text>
            <Image source={{ uri: user?.photoURL || "" }} style={styles.image} />
            <Text style={styles.text}>{user?.displayName}</Text>
            <Text style={styles.text}>{user?.email}</Text>
            <View style={{ marginTop: 30 }}>
                <Button title="Signout" onPress={signOut} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 30,
        color: '#000'
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: '#000'
    },
});