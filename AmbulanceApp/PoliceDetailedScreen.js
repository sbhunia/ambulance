import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Header, ListItem, Icon, Button } from 'react-native-elements';

class PoliceDetailedScreen extends Component    {
    constructor(props)  {
        super(props);
        this.state = {

        }
    }

    render()    {
        return  (
            <View>
                <Text>{this.props.route.params.id}</Text>
            </View>
        )
    }
}

export default PoliceDetailedScreen