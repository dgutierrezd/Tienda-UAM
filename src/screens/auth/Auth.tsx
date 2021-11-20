import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Authentication from './Authentication';
import Profile from './Profile';


export const Auth = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '546473739872-tusek6jf3ghr44138aks7md65nmbobh8.apps.googleusercontent.com',
        });
    }, []);

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    });

    if (authenticated) {
        return <Profile />;
    }

    return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}