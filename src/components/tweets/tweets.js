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
            <Text>Welcome back!</Text>
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
