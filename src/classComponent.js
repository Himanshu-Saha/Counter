import { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

class UserDetails extends Component {
  // Initialize state with default values
  state = {
    fullName: '',
  };

  // Define the static method getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    // Combine first and last name to create the full name
    const prevName = prevState.fullName;
    const fullName = `${nextProps.firstName} ${nextProps.lastName}`;
    // console.log(prevName,1);
    console.log(prevState.fullName,2);
    console.log(fullName,3);
    
    // Check if the full name has changed since the last props update
    if (fullName !== prevState.fullName) {
      // If changed, return the updated state with the new full name
      return {
        fullName: fullName,
      };
    }
    // If no change in props, return null
    return null;
  }
  count=0;
  componentDidMount() {
    this.setState({fullName: 'Rokuro'});
    console.log(this.state.fullName,4);
    // let id=setInterval(() => {
    //     if(this.count>20)clearInterval(id);
    //     this.count++;
    //     console.log(this.count);
    // }, 1000);
  }
  shouldComponentUpdate(){
    if(this.count<10)
    return true;
    else return false;
  }
  render() {
    return (
      <Text>
        {this.state.fullName}, Age: {this.props.age}, {this.count}
      </Text>
    );
  }}
// constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "green"};
//   }
//   static getDerivedStateFromProps(props, state) {
//       console.log(state.favoritecolor);
//       console.log(props.favcol);
//       return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
  
//   render() {
//     return (
//       <View>
//         <Text>My Favorite Color is {this.state.favoritecolor}</Text>
//         <TouchableOpacity onClick={this.changeColor}><Text style={{ color: this.state.favoritecolor }}>Button</Text></TouchableOpacity>
//       </View>
//     );
//   }
// }

export default UserDetails;



 