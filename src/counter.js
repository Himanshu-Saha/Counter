import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  pressButton(ok) {
    if (ok == true) {
      this.setState({count: this.state.count + 1});
    }
    // if(this.state.count<=0)Alert.alert("")
    if (ok == false) {
      this.setState({count: this.state.count - 1});
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{this.state.count}</Text>
          <Text>{'\n'}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.pressButton(true)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.pressButton(false)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.reset}>
            <Button
              title="Reset"
              color="#dce3e8"
              onPress={() => this.setState({count: (this.state.count = 0)})}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // margin:"auto"
  },
  subContainer: {
    marginTop: 150,
  },
  text: {
    fontSize: 200,
    textAlign: 'center',
    color: 'white',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 60,
    color: '#dce3e8',
    // textAlign:"center",
    // textAlignVertical: 'center',
  },
  button: {
    // padding: 40,
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#dce3e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reset: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
