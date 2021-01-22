import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 'Patient 1',
        title: 'First Item',
    },
    {
        id: 'Patient 2',
        title: 'Second Item',
    },
    {
        id: 'Patient 3',
        title: 'Third Item',
    },
    {
        id: 'Patient 4',
        title: 'First Item',
    },
    {
        id: 'Patient 5',
        title: 'Second Item',
    },
    {
        id: 'Patient 6',
        title: 'Third Item',
    },
    {
        id: 'Patient 7',
        title: 'First Item',
    },
    {
        id: 'Patient 8',
        title: 'Second Item',
    },
    {
        id: 'Patient 9',
        title: 'Third Item',
    }, {
        id: 'Patient 10',
        title: 'First Item',
    },
    {
        id: 'Patient 11',
        title: 'Second Item',
    },
    {
        id: 'Patient 12',
        title: 'Third Item',
    },
    {
        id: 'Patient 13',
        title: 'First Item',
    },
    {
        id: 'Patient 14',
        title: 'Second Item',
    },
    {
        id: 'Patient 15',
        title: 'Third Item',
    },
];

class PoliceMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
            <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'POLICE MAIN PAGE', style: { color: '#fff', textAlign: "center" } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                <Text style={styles.titleText}>Police Main Page</Text>
                <ScrollView>
                    
                    {DATA.map((item, index) => (
                        <ListItem key={index} bottomDivider>
                            <Icon name='user' type='evilicon' size={50} />
                            <ListItem.Content>
                                <ListItem.Title>{item.id}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}

                </ScrollView>
            </SafeAreaView>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});


export default PoliceMainScreen;

