// Import the code we need
import React from 'react';
import SignIn from './components/authentication/signin';
import Parse from 'parse/react-native';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    componentWillMount: function() {
        Parse.initialize('authentication830472991', 'authenticationKLnFEon5E8t20c7');
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
