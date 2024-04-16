import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Snapshot from './snapshot';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
      parentCount:0
       // Initial visibility state
    };
  }

  toggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent // Toggle visibility state
    }));
  };
  updateCount = (message)=>{
    this.setState({parentCount:(message+(this.state.parentCount))});
    console.log(this.state.parentCount,100);
  }
  render() {
    return (
      <View>
        {this.state.showComponent ? <Snapshot parentC={this.updateCount}/> : null}
        <Text>{this.state.parentCount}</Text>
        <Button title="Toggle Component" onPress={this.toggleComponent} />
      </View>
    );
  }
}

export default ParentComponent;
