// Import the code we need
import React from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    render: function() {
        return <View style={styles.container}>
            <Text>Sign In</Text>
        </View>
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
