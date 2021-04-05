import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button, Overlay, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const PoliceEmail = "police";
const AmbulanceEmail = "ambulance";
const HospitalEmail = "hospital";
const AdminEmail = "admin";
const password = "123";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            overlayVisible: false
        }
    }

    handleLogin = () => {
        if (this.state.email == PoliceEmail && this.state.password == password) {
            return this.props.navigation.navigate('Police Home Page');
        }   else if(this.state.email == AmbulanceEmail && this.state.password == password)  {
            return this.props.navigation.navigate('Ambulance Home Page');
        }   else if(this.state.email == HospitalEmail && this.state.password == password)   {
            return this.props.navigation.navigate('Hospital Home Page');
        }   else if (this.state.email == AdminEmail && this.state.password == password) {
            return this.props.navigation.navigate('Admin Home Page');
        }   else {
            this.setState({
                overlayVisible: true
            })
        }
    }

    handleOverLay = () => {
        this.setState({
            overlayVisible: false
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Overlay isVisible={this.state.overlayVisible} onBackdropPress={this.handleOverLay}>
                        <Text>Wrong Login Information</Text>
                    </Overlay>
                    <Card>
                        <View>
                            <Text>Email</Text>
                            <Input
                                placeholder="Email"
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                onChangeText={value => this.setState({ email: value })}
                            />
                        </View>

                        <View>
                            <Text>Password</Text>
                            <Input
                                placeholder="Password"
                                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                                onChangeText={value => this.setState({ password: value })}
                            />
                        </View>

                        <Button
                            title="Login"
                            onPress={this.handleLogin}
                        />
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 50,
        margin: 20,
    }
});

export default LoginScreen