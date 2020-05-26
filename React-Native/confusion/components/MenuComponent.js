import React,{Component} from 'react';
import { View,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {
    // The renderItem {item} parameter takes whatever data in the data param
    // props.dishes array and supplies each item to the renderMenuItem
    // The renderItem {index} parameter takes whatever data in the keyExtractor
    // param, which is supposed to be a string

    // To Trigger you must add onPress = {() => props.onPress(item.id)}

    const renderMenuItem = ({item,index}) =>{
        return(
            <ListItem 
                key={index} 
                title = {item.name}
                subtitle = {item.description}
                hideChevron={true}
                onPress = {() => props.onPress(item.id)}
                leftAvatar = {{ source: require('./images/uthappizza.png')}} // This is javascript item supplied as an object, the require should be in the code, when you say require it has to be an EXACT image name.
                />


        );
    }
    return(
        <FlatList  
            data = {props.dishes}
            renderItem = {renderMenuItem}
            keyExtractor = {item => item.id.toString()}
            />

    );

}

export default Menu;