// Import the code we need
import React from 'react';
import SignIn from './components/authentication/signin';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    componentWillMount: function() {
        Parse.initialize('myAppId', 'unused');
        Parse.serverURL = 'https://kpritch-authentication.herokuapp.com/parse';
    },
    render: function() {
        return <View style={styles.container}>
            <SignIn></SignIn>
        </View>
    }
});

// Style the react component
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
