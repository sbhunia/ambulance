import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

class AdminMainScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Patient List</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <Text>Patient1</Text>
                        <Button title='Remove'></Button>
                    </ListItem>

                    <ListItem>
                        <Text>Patient1</Text>
                        <Button title='Remove'></Button>
                    </ListItem>
                </Card>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Ambulance List</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <Text>Ambulance 1</Text>
                        <Button title='Remove'></Button>
                    </ListItem>

                    <ListItem>
                        <Text>Ambulance 2</Text>
                        <Button title='Remove'></Button>
                    </ListItem>

                </Card>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Hospital List</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <Text>Hospital 1</Text>
                        <Button title='Remove'></Button>
                    </ListItem>

                    <ListItem>
                        <Text>Hospital 1</Text>
                        <Button title='Remove'></Button>
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