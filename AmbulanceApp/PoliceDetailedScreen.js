import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem, Card, Input, Button} from 'react-native-elements';
import DatePicker from 'react-native-date-picker'

class PoliceDetailedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.statusBar}>Status: {this.props.route.params.statusBar}</Text>
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

                <Card>
                    <Card.Title style={styles.sectionTitle}>Payment Info</Card.Title>
                    <Card.Divider />

                    <View>
                        <Text>Your Bounty</Text>
                        <Input
                            placeholder='Input your amount'
                            leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                        />
                    </View>

                    <Text>Expiration Time</Text>

                    <DatePicker
                        date={this.state.date}
                    />

                    <View>
                        <Text>Penalty Amount</Text>
                        <Input
                            placeholder='Input your penalty'
                            leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                        />
                    </View>
                </Card>

                <Button title="Submit"/>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Bidding Info</Card.Title>
                    <Card.Divider />

                    <Text>Status: Completed</Text>

                    <View>
                        <Button title="Ambulance 1"/>
                    </View>

                    <View>
                        <Button title="Ambulance 2"/>
                    </View>

                    <View>
                        <Button title="Ambulance 3"/>
                    </View>
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

export default PoliceDetailedScreen;