// Import the code we need
import React from 'react';

import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

// Create a react component
module.exports = React.createClass({
    render: function() {
        return <TouchableHighlight style:{styles.button} underlayColor={'gray'} onPress={this.props.onPress}>
            <Text style:{styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
    }
});

var styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        padding: 5,
        marginTop: 10
    },
    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    }
});
