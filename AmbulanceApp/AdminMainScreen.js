import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Overlay, Input, Divider } from 'react-native-elements';
import { addAmbulance, removeAmbulance, addHospital, removeHospital, addPolice, removePolice } from './SolididityHandler.js';

// const PATIENTLIST = [{ name: "Patient 1" }, { name: "Patient 2" }, { name: "Patient 3" }]
// const AMBULANCELIST = [{ name: "Ambulance 1" }, { name: "Ambulance 2" }, { name: "Ambulance 3" }]
// const HOSPITALLIST = [{ name: "Hospital 1" }, { name: "Hospital 2" }, { name: "Hospital 3" }]

class AdminMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayVisible: false,
            ID: "",
            name: "",
            currentList: "Patient",
            PATIENTLIST: [{ name: "Patient 1" }, { name: "Patient 2" }, { name: "Patient 3" }],
            AMBULANCELIST: [{ name: "Ambulance 1" }, { name: "Ambulance 2" }, { name: "Ambulance 3" }],
            HOSPITALLIST: [{ name: "Hospital 1" }, { name: "Hospital 2" }, { name: "Hospital 3" }]
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAdd = (list) => {
        this.setState({ 
            overlayVisible: true,
            currentList: list.trim()
        });
    }

    handleClose = () => {
        this.setState({ overlayVisible: false });
    }

    handleChangeID = (id)   =>  {
        this.setState({ ID: id });
    }

    handleChangeName = (name)   =>  {
        this.setState({ name: name });
    }

    handleSubmit = () => {
        console.log(typeof this.state.currentList);
        console.log(this.state.currentList == "Patient");
        if (this.state.currentList == "Patient")  {
            let oldList = this.state.PATIENTLIST;
            oldList.push({name: this.state.name});
            this.setState({PATIENTLIST: oldList});
        }   else if (this.state.currentList == "Ambulance"){
            let oldList = this.state.AMBULANCELIST;
            oldList.push({name: this.state.name});
            this.setState({AMBULANCELIST: oldList});
        }   else if (this.state.currentList == "Hospital")    {
            let oldList = this.state.HOSPITALLIST;
            oldList.push({name: this.state.name});
            this.setState({HOSPITALLIST: oldList});
        }   else    {
            console.log("Error");
        }
        this.handleClose();
    }

    render() {
        return (
            <ScrollView>
                <Overlay isVisible={this.state.overlayVisible} style={styles.overLay} fullScreen={true}>
                    <Text>Current List: {this.state.currentList}</Text>
                    <Input placeholder='ID' onChangeText={(value) => this.handleChangeID(value)}/>
                    <Input placeholder='Name' onChangeText={(value) => this.handleChangeName(value)}></Input>
                    <Button title="Submit" onPress= {() => this.handleSubmit()}></Button>
                    <Divider style={{ backgroundColor: "blue" }} />
                    <Button title="Back" onPress={() => this.handleClose()}></Button>
                </Overlay>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Patient List</Card.Title>
                    <Card.Divider />

                    {this.state.PATIENTLIST.map((item, index) => (
                        <ListItem key={index}>
                            <Text>{item.name}</Text>
                            <Button title='Remove'></Button>
                        </ListItem>
                    ))}

                    <Card.Divider />
                    <Button title='Add' onPress={() => this.handleAdd('Patient')}></Button>
                </Card>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Ambulance List</Card.Title>
                    <Card.Divider />
                    {this.state.AMBULANCELIST.map((item) => (
                        <ListItem>
                            <Text>{item.name}</Text>
                            <Button title='Remove'></Button>
                        </ListItem>
                    ))}

                    <Card.Divider />
                    <Button title='Add' onPress={() => this.handleAdd('Ambulance')}></Button>
                </Card>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Hospital List</Card.Title>
                    <Card.Divider />
                    {this.state.HOSPITALLIST.map((item) => (
                        <ListItem>
                            <Text>{item.name}</Text>
                            <Button title='Remove'></Button>
                        </ListItem>
                    ))}

                    <Card.Divider />
                    <Button title='Add' onPress={() => this.handleAdd('Hospital')}></Button>
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
    },
    overLay: {
        height: "50%",
        width: "50%"
    }
});

export default AdminMainScreen;