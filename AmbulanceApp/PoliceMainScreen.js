import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ambulanceAbi } from './abi/abis';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x3F51Fd2c1a6faD59A413A529E1e9f342f39f2d75';
const SimpleContract = new web3.eth.Contract(ambulanceAbi, contractAddr);


const Stack = createStackNavigator();

const DATA = [
    {
        id: 'Patient 1',
        location: 'Oxford, OH',
        injuryType: 'Bone Break',
        severity: 'Severe'
    },
    {
        id: 'Patient 2',
        location: 'New York, NY',
        injuryType: 'Heart Attack',
        severity: 'Extremely Severe'
    },
    {
        id: 'Patient 3',
        location: 'Grands Rapids, MI',
        injuryType: 'Headache',
        severity: 'Low'
    },
    {
        id: 'Patient 4',
        location: 'Indianapolis, IN',
        injuryType: 'COVID',
        severity: 'Low'
    }
];
postBountyButton = () => {
    const { TextInputValue } = this.state;
    SimpleContract.methods.postBounty(memoryHash, timeLimit, memoryLocation, allowedHospitalsList, penalty).send();
}

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
                    <Card style={styles.card}>
                        <Card.Title>POST BID</Card.Title>
                        <Card.Divider />
                        
                    </Card>

                    <Card style={styles.card}>
                        <Card.Title>OPEN BID</Card.Title>
                        <Card.Divider />
                        {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider onPress={
                            () => this.props.navigation.navigate('Police Detailed Page', { id: item.id, location: item.location, injuryType: item.injuryType, injuryLevel: item.severity, status: "Awaiting"}
                        )} >
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

                    <Card>
                        <Card.Title>ACCEPTED BID</Card.Title>
                        <Card.Divider />
                        {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider onPress={
                            () => this.props.navigation.navigate('Police Detailed Page', { id: item.id, location: item.location, injuryType: item.injuryType, injuryLevel: item.severity, status: "Transporting" }
                        )}>
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

                    <Card>
                        <Card.Title>COMPLETED BID</Card.Title>
                        <Card.Divider />
                        {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider onPress={
                            () => this.props.navigation.navigate('Police Detailed Page', {id: item.id, location: item.location, injuryType: item.injuryType, injuryLevel: item.severity, status: "Completed" }
                        )}>
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

export default PoliceMainScreen;

