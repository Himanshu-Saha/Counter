import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Snapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.props.parentC(1)
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval); // Clear the interval when the component is unmounted
    console.log(this.state.count,1);
    // this.props.parentC(this.state.count)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Previous Count:', snapshot);
    // console.log('Current Count:', this.state.count);
    // console.log(this.props);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Return the previous count as a snapshot
    return prevState.count;
  }

  render() {
    return (
      <View>
        <Text>Current Count: {this.state.count}</Text>
      </View>
    );
  }
}

export default Snapshot;
