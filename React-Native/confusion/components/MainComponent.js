import React,{Component} from 'react';
import Menu from './MenuComponent';
import {View} from 'react-native';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null,

        }
    }

    // This function sets the state to the selectedState
    // this is supplied to the Menu as a parameter

    onDishSelect(dishId) {
        this.setState({selectedDish:dishId});
    }



    render(){

        return(

            // Two items cannot be returned, hence we envelope both Menu and DishDetail
            // into a <View></View>
            //Implemenation of the DishDetail, needs to pass the dish state
            // the filter returns a subArray containing elements that match
            // anonymous funciton criteria
            <View style = {{flex:1}}>
                <Menu 
                    dishes = {this.state.dishes}
                    onPress = {(dishId) => this.onDishSelect(dishId)}/>
                

                <DishDetail dish = {this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]}/>

            </View>
        )
    }

}

export default Main;