import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Counter from './src/counter';
import MyButton from './src/button';
// const Data = [
//   {
//     name:"Himanshu",
//     place:"Bihar"
//   },
//   {
//     name:"Tokie",
//     place:"Japan"
//   },
//   {
//     name:"Gopa",
//     place:"Anantpuram"
//   },
//   {
//     name:"Harpinder",
//     place:"Chandgarh"
//   },
//   {
//     name:"Aishwarya",
//     place:"Monymajra"
//   }
// ]
// const App = ()=>(

//     <>
//     <br />
//     </>
  
// );

// const App=()=>{
//   const [count,setCount]=useState(0);
//   return(
//     <>
//       <MyButton num={count} title="+" setCount={setCount}/>
//       <Text>
//         {count}
//       </Text> 
//       <MyButton num={count} title="-" setCount={setCount}/>
//     </>   
//   )
// }
// export default App;


function Model(){
  return (
    <>
      {/* <SafeAreaView> */}
      {/* <UserDetails firstName="Himanshu" lastName="Saha" age={22}/> */}
        <Counter />
      {/* </SafeAreaView> */}
    </>
  )
}
export default Model;

