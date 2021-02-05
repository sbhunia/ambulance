import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem, Card, Input, Button} from 'react-native-elements';
import DatePicker from 'react-native-date-picker'

class AmbulanceDetailedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Patient Info</Card.Title>
                    <Card.Divider />

                    <ListItem>
                        <Text>Name: Patient 1</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Location: Oxford, Ohio</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Google Map: Location</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Injury Type: Bones Break</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Injury Level: Severe</Text>
                    </ListItem>
                </Card>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Bidding Period</Card.Title>
                    <Card.Divider />

                    <View>
                        <Text style = {styles.elementTitle}>Police Bidding Amount</Text>
                        <Text style = {styles.elementBody}>
                            2000 $
                        </Text>

                        <Text style = {styles.elementTitle}>Penalty Amount</Text>
                        <Text style = {styles.elementBody}>
                            300 $
                        </Text>

                        <Text style = {styles.elementTitle}>Expiration Time</Text>
                        <Text style = {styles.elementBody}>
                            2hr: 20mins: 10s
                        </Text>
                    </View>


                    <View>
                        <Text  style = {styles.elementTitle}>Enter Your Price</Text>
                        <Input
                            placeholder='Input your price'
                            leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                        />
                    </View>
                </Card>

                <Button title="Submit"/>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 20
    }, 
    elementTitle: {
        fontSize: 15,
        textAlign: "center"
    },
    elementBody:    {
        marginBottom: 5,
        fontSize: 15,
        textAlign: "center"
    }
});

export default AmbulanceDetailedScreen