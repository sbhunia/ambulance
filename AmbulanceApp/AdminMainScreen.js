import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Overlay, Input, Divider } from 'react-native-elements';


class AdminMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayVisible: false,
            ID: "",
            name: "",
            currentList: "Patient",
            PATIENTLIST: [{ id: "123456789", name: "Patient 1" }],
            AMBULANCELIST: [{ id: "97654321", name: "Ambulance 1" }],
            HOSPITALLIST: [{ id: "228347982", name: "Hospital 1" }]
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd = (list) => {
        this.setState({
            overlayVisible: true,
            currentList: list.trim()
        });
    }

    handleRemove = (list, id) => {
        if (list == "Patient") {
            let newList = this.state.PATIENTLIST.filter((item) => item.id !== id);
            this.setState({ PATIENTLIST: newList });
        } else if (list == "Ambulance") {
            let newList = this.state.AMBULANCELIST.filter((item) => item.id !== id);
            this.setState({ AMBULANCELIST: newList });
        } else {
            let newList = this.state.HOSPITALLIST.filter((item) => item.id !== id);
            this.setState({ HOSPITALLIST: newList });
        }
        console.log(id);
    }

    handleClose = () => {
        this.setState({ overlayVisible: false });
    }

    handleChangeID = (id) => {
        this.setState({ ID: id });
    }

    handleChangeName = (name) => {
        this.setState({ name: name });
    }

    handleSubmit = () => {
        if (this.state.currentList == "Patient") {
            let oldList = this.state.PATIENTLIST;
            oldList.push({ id: this.state.ID, name: this.state.name });
            this.setState({ PATIENTLIST: oldList });

        } else if (this.state.currentList == "Ambulance") {
            let oldList = this.state.AMBULANCELIST;
            oldList.push({ id: this.state.ID, name: this.state.name });
            this.setState({ AMBULANCELIST: oldList });

        } else if (this.state.currentList == "Hospital") {
            let oldList = this.state.HOSPITALLIST;
            oldList.push({ id: this.state.ID, name: this.state.name });
            this.setState({ HOSPITALLIST: oldList });

        } else {
            console.log("Error");
        }
        this.handleClose();
    }

    render() {
        return (
            <ScrollView>
                <Overlay isVisible={this.state.overlayVisible} style={styles.overLay} fullScreen={true}>
                    <Text>Current List: {this.state.currentList}</Text>
                    <Input placeholder='ID' onChangeText={(value) => this.handleChangeID(value)} />
                    <Input placeholder='Name' onChangeText={(value) => this.handleChangeName(value)}></Input>
                    <Button title="Submit" onPress={() => this.handleSubmit()}></Button>
                    <Divider style={{ backgroundColor: "blue" }} />
                    <Button title="Back" onPress={() => this.handleClose()}></Button>
                </Overlay>

                <Card>
                    <Card.Title style={styles.sectionTitle}>Patient List</Card.Title>
                    <Card.Divider />

                    {this.state.PATIENTLIST.map((item) => (
                        <ListItem>
                            <ListItem.Content style={{ width: "100%", alignItems: "center" }}>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                            </ListItem.Content>

                            <Button title='Remove' onPress={() => this.handleRemove("Patient", item.id)}></Button>
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
                            <ListItem.Content style={{ width: "100%", alignItems: "center" }}>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                            </ListItem.Content>

                            <Button title='Remove' onPress={() => this.handleRemove("Ambulance", item.id)}></Button>
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
                            <ListItem.Content style={{ width: "100%", alignItems: "center" }}>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                            </ListItem.Content>

                            <Button title='Remove' onPress={() => this.handleRemove("Hospital", item.id)}></Button>
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