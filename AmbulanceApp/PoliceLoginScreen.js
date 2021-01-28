import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Input, Button, Overlay, Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const email = "khoa";
const password = "123";

class PoliceLoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            overlayVisible: false
        }
    }

    handleLogin = () => {
        if (this.state.email == email && this.state.password == password) {
            return this.props.navigation.navigate('Police Home Page');
        } else {
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
                <View>
                    <Image source={require('./Logo.jpg')} alt="Logo" style={styles.image} />
                    <Text>Made by Thomas Nguyen</Text>
                </View>
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

export default PoliceLoginScreen