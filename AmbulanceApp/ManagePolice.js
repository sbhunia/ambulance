import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { Component } from "react";
import { SimpleContract } from './SolidityHandler';
import { ambulanceAbi } from './abi/abis';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x3F51Fd2c1a6faD59A413A529E1e9f342f39f2d75';
const SimpleContract = new web3.eth.Contract(ambulanceAbi, contractAddr);

class ManagePolice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TextInputValue: ''
        }
    }
    addPoliceButton = () => {
        const { TextInputValue } = this.state;
        SimpleContract.methods.addPolice(TextInputValue).send();
    }
    removePoliceButton = () => {
        const { TextInputValue } = this.state;
        SimpleContract.methods.addPolice(TextInputValue).send();
    }
    render() {

        return (
            <ScrollView>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Add new Police</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <TextInput
                            style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 2 }}
                            placeholder=" Enter Police Address"
                            onChangeText={TextInputValue => this.setState({ TextInputValue })}
                            underlineColorAndroid="transparent"
                        />
                        <Button title='Add'
                            onPress={() => this.addPoliceButton}>
                        </Button>
                    </ListItem>
                </Card>
                <Card>
                    <Card.Title style={styles.sectionTitle}>Remove Police</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <TextInput
                            style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 2 }}
                            placeholder=" Enter Police Address"
                            onChangeText={TextInputValue => this.setState({ TextInputValue })}
                            underlineColorAndroid="transparent"
                        />
                        <Button title='Remove'
                            onPress={() => this.removePoliceButton}>
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

export default ManagePolice;