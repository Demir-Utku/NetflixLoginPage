import React, { Component } from 'react';
import {
  View, Text, Image, SafeAreaView, Dimensions,
  TouchableOpacity,
  ScrollView, Platform, PixelRatio
} from 'react-native';

import {Input, Button, CheckBox  } from './src/Components'

const { width } = Dimensions.get('window')

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export default class App extends Component {
  state = {
    username: '',
    password: '',
    isRememberMe: false
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    const {
      username,
      password,
      isRememberMe

    } = this.state
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>

        <ScrollView contentContainerStyle={{ flex: 1 }}>

          {/* Logo Image */}
          <View style={[{ flex: 1, marginLeft: 10 }]}>
            <Image
              source={require('./src/image/netflix.png')}
              style={styles.logo}
            />
          </View>

          <View style={{borderBottomWidth: 40, borderTopWidth: 1}}>
            <Text style={[styles.whiteText, { fontSize: normalize(32), marginLeft: 20 }]}>Sign In</Text>
          </View>

          {/* Form */}
          <View style={[styles.subContainer, { flex: 2.5 }]}>

            <Input
              placeholder={'Email or phone number'}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />

            <Input
              placeholder={'Password'}
              secureTextEntry={isRememberMe}
              keyboardType={'numeric'}
              value={password}
              onChangeText={(password) => this.setState({ password })}
            />

            <Button
              text={'Sign In'}
              onPress={() => {
                console.log('State Değerleri ', username, ' ', password);
              }}
            />

            <View style={{
              flexDirection: 'row',
              width: '90%',
              marginBottom: 40,
              marginTop: 10,
              justifyContent: 'space-between'
            }}>

              <CheckBox
                text='Remember me'
                status={isRememberMe}
                onPress={() => this.setState({ isRememberMe: !isRememberMe })}
              />

              <TouchableOpacity>
                <Text style={{ fontSize: 16, marginLeft: 15, color: "#b9b5b5" }}>Need help?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login With Facebook */}
          <View style={[{ flexDirection: 'row', marginLeft: 15, flex: 0.5 }]}>
            <Image
              source={require('./src/image/facebook.png')}
              style={styles.facebook}
            />
            <Text style={[styles.grayText, { fontSize: 18, marginLeft: 15 }]}>Log In with Facebook</Text>
          </View>

          {/* Bottom */}
          <View style={[{ flex: 1 }]}>
            <View style={{ borderBottomWidth: 10 }} >
              <Text style={[styles.grayLargeText, { marginLeft: 15 }]}>
                New to Netflix?
              <Text style={styles.whiteLargeText}>  Sign up now</Text>
              </Text>
            </View>
          </View>

        </ScrollView>

      </SafeAreaView>
    )
  }
}

const styles = {
  mainText: { color: 'gray' },
  blueText: { color: '#4495cb', fontWeight: 'bold' },
  whiteText: { color: "white", fontWeight: "bold" },
  whiteLargeText: { color: "white", fontWeight: "bold", fontSize: normalize(16) },
  grayText: { color: "gray", fontWeight: "bold" },
  grayLargeText: { color: "gray", fontWeight: "bold", fontSize: normalize(16) },
  subContainer: { alignItems: "center", justifyContent: "center" },
  bottomContainer: { alignItems: "le" },
  logo: { width: 150, height: 100 },
  facebook: { width: 20, height: 20 },
}
