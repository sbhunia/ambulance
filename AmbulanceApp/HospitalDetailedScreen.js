import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ListItem, Card, Button } from 'react-native-elements';

class HospitalDetailedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmButtonStatus: false
        }
    }

    handleSubmit = () => {
        this.setState({
            confirmButtonStatus: true
        })
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.statusBar}>Status: {this.props.route.params.statusBar
                }</Text>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Patient Info</Card.Title>
                    <Card.Divider />

                    <ListItem>
                        <Text>Name: {this.props.route.params.id}</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Location: {this.props.route.params.location}</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Google Map: Location</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Injury Type: {this.props.route.params.injuryType}</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Injury Level: {this.props.route.params.injuryLevel}</Text>
                    </ListItem>
                </Card>

                <Button title="CONFIRM" disabled={this.state.confirmButtonStatus} onPress={this.handleSubmit}></Button>

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

export default HospitalDetailedScreen;