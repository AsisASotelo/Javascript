import React,{Component} from 'react';
import Menu from './MenuComponent';
import {View,Text} from 'react-native';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import {Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// This function creates the Menu Navigator using the imported
// createStackNavigator function taht takes an object as an arg


const MenuNavigator = createStackNavigator()
//     Menu: {screen:Menu}, // This is how you specify various components 
//     Dishdetail: { screen: DishDetail}
// }, {
//     initialRouteName: 'Menu',
//     // Navigation Options is common on all of the 
//     navigationOptions: {
//         headerStyle: {
//             backgroundColor:'#512DA8'
//         },
//         headerTintColor:'#fff',
//         headerTitleStyle: {
//             color:'#fff'
//         }

//     }
// }) THIS ENTIRE CODE PARAM IS DEPRECATED





class Main extends Component{

    //The state of the view Menu and SelectedDish will be 
    // Held in MenuComponent
    
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         dishes:DISHES,
    //         selectedDish:null,

    //     }
    // }

    // // This function sets the state to the selectedState
    // // this is supplied to the Menu as a parameter

    // onDishSelect(dishId) {
    //     this.setState({selectedDish:dishId});
    // }



    render(){

        return(

            // Navigation Implementation requires the import of createStackNavigator
            // and the View and Platform components

            // Two items cannot be returned, hence we envelope both Menu and DishDetail
            // into a <View></View>
            //Implemenation of the DishDetail, needs to pass the dish state
            // the filter returns a subArray containing elements that match
            // anonymous funciton criteria

            // Th platform below is using the Platform Object imported aboce.
            <View style = {{flex:1, paddingTop: Platform.OS === 'ios' ? 0: Expo.Constants.statusBarHeight}}> 
                

                <MenuNavigator/>



                {/* <Menu 
                    dishes = {this.state.dishes}
                    onPress = {(dishId) => this.onDishSelect(dishId)}/>
                

                <DishDetail dish = {this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]}/> */}

            </View>
        )
    }

}

export default Main;