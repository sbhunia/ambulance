import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Header, ListItem, Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DATA = [
    {
        id: 'Patient 333',
        title: 'First Item',
    }
];

class PoliceMainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    showListItem = ({ item }) => {
        return (
            <View>
                <Text>{item.id}</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider>
                            <Icon  name='rowing' />
                            <ListItem.Content>
                                <ListItem.Title>{item.id}</ListItem.Title>
                            </ListItem.Content>
                            <Button title="Solid Button" onPress={() => this.props.navigation.navigate('Police Detailed Page', {id: item.id})}/>
                        </ListItem>
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:  {
        flex: 1
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default PoliceMainScreen;

