// Import the code we need
import React from 'react';
import Parse from 'parse/react-native';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    componentWillMount: function() {
        Parse.User.currentAsync()
            .then((user) => { this.setState({user: user}); })
    },
    getInitialState: function() {
        return {
            user: null
        };
    },
    render: function() {
        if (!this.state.user) {
            return <Text>Loading...</Text>
        }

        var username = this.state.user.get('username');
        return <View style={styles.container}>
            <Text>Welcome back, {username}!</Text>
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
