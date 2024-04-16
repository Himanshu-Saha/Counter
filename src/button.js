import React from "react";
import { Alert, Button, View } from "react-native";

export default function MyButton({num,title,setCount}){
    return (
        <View>
        <Button
            title={title}
            onPress={()=>{
                if(title==='+')
                setCount(num+1);
                else{
                    setCount(num-1);
                }
            }}
        />
        </View>
    );
}
