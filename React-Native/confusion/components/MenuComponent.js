import React,{Component} from 'react';
import { View,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';


// In the navigation we change this to a class. in order to use this in React
// Redux we must have the view components into class, each with its own state


class Menu extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        
        }
    }
    //This insures that the status bar is menu

    static navigationOptions = {
        title : 'Menu'
    }
    // The renderItem {item} parameter takes whatever data in the data param
    // props.dishes array and supplies each item to the renderMenuItem
    // The renderItem {index} parameter takes whatever data in the keyExtractor
    // param, which is supposed to be a string

    // To Trigger you must add onPress = {() => props.onPress(item.id)}

    
    render(){
        
        const renderMenuItem = ({item,index}) =>{
            return(
                <ListItem 
                    key={index} 
                    title = {item.name}
                    subtitle = {item.description}
                    hideChevron={true}
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                    // onPress = {() => props.onPress(item.id)}
                    leftAvatar = {{ source: require('./images/uthappizza.png')}} // This is javascript item supplied as an object, the require should be in the code, when you say require it has to be an EXACT image name.
                    />
    
    
            );
        }
        // This is confusing will come back

        const { navigate } =this.props.navigation;
    
        
        return(

        <FlatList  
            data = {this.state.dishes}
            renderItem = {renderMenuItem}
            keyExtractor = {item => item.id.toString()}
            />

        );
    }

}

export default Menu;