import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { SimpleContract } from './SolidityHandler'


class AdminMainScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <ScrollView>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Welcome Administrator</Card.Title>
                    <Card.Divider />
                    <ListItem>

                    </ListItem>

                </Card>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Manage Hospitals, Police, and Ambulances</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <Button title='Manage Ambulances'
                            onPress={() => this.props.navigation.navigate('Manage Ambulance Page')}>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button title='Manage Hospitals'
                            onPress={() => this.props.navigation.navigate('Manage Hospital Page')}>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button title='Manage Police'
                            onPress={() => this.props.navigation.navigate('Manage Police Page')}>
                        </Button>
                    </ListItem>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        fontSize: 20,
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 20
    }
});

export default AdminMainScreen;

