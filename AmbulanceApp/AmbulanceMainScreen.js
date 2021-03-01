import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DATA = [
    {
        id: 'Patient 1',
        title: 'First Item',
    },
    {
        id: 'Patient 2',
        title: 'First Item',
    },
    {
        id: 'Patient 3',
        title: 'First Item',
    },
    {
        id: 'Patient 4',
        title: 'First Item',
    },
    {
        id: 'Patient 5',
        title: 'First Item',
    },
    {
        id: 'Patient 6',
        title: 'First Item',
    }
];

class AmbulanceMainScreen extends React.Component {
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

                    <Card style={styles.card}>
                        <Card.Title>AVAILABLE BIDS</Card.Title>
                        <Card.Divider />
                        {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider onPress={() => this.props.navigation.navigate('Ambulance Detailed Page', { id: item.id })} >
                            <Icon
                                name='user'
                                type='evilicon'
                                size={50}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.id}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                    </Card>

                    
                    
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    card:   {
        width: '100%'
    }
});

export default AmbulanceMainScreen;

