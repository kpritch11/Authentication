// Import the code we need
import React from 'react';
import SignIn from './components/authentication/signin';
import Parse from 'parse/react-native';

import {
    Navigator,
    StyleSheet
} from 'react-native';

var ROUTES = {
    signIn: SignIn
};

// Create a react component
module.exports = React.createClass({
    componentWillMount: function() {
        Parse.initialize('authentication830472991', 'authenticationKLnFEon5E8t20c7');
        Parse.serverURL = 'https://kpritch-authentication.herokuapp.com/parse';
    },
    renderScene: function(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component></Component>
    },
    render: function() {
        return <Navigator
            style={styles.container}
            initialRoute={{name: 'signIn'}}
            renderScene={this.renderScene}
            configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}>
        </Navigator>
    }
});

// Style the react component
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
