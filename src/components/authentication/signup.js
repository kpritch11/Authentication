// Import the code we need
import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    render: function() {
        return <View style={styles.container}>
            <Text>You can sign up here!</Text>
        </View>
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
