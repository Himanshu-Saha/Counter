import React from 'react';
import {Alert, Button, SafeAreaView, Text, View} from 'react-native';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 1,
    };
    this.changeVersion = this.changeVersion.bind(this);
  }

  changeVersion(str) {
    console.log(this.state.version);
    if (str == '+') this.setState({version: this.state.version + 1});
    else {
      if (this.state.version <= 0) Alert.alert('Lowest version');
      else this.setState({version: this.state.version - 1});
    }
    // console.log(this.state,2);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>
            Car{'\n'}
            Name: {this.props.props.name + '\n'}
            Model: {this.props.props.model + '\n'}
            Version: {this.state.version}
          </Text>
          <Button
            title="Upgrade"
            onPress={() => {
              this.changeVersion('+');
            }}
          />
          <Button
            title="Downgrade"
            onPress={() => {
              this.changeVersion('-');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
this.props = 'himanshu';
export default Car;
