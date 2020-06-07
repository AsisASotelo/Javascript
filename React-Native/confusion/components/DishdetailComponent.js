import React,{Component} from 'react';
import { View,FlatList, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';


// This function utilizes the Card component to list out the dihes.
function RenderDish(props) {
    const dish = props.dish;

    if(dish != null) {
        return(
            <Card
                featuredTitle = {dish.name}
                image={require('./images/uthappizza.png')}
                

                >

                <Text style={{margin:10}}>
                    {dish.description}
                </Text>
            </Card>

        );
    }else{
        return(<View></View>)
    }
}

// This function is used to export the DishDetail functions

class DishDetail extends Component {

    constructor(props){
    super(props);
    this.state={
        dishes:DISHES
    };
}

    static navigationOptions ={
        title: 'Dish Details'
    }



    render() {
        const dishId =this.props.navigation.getParam("dishId",'') // Allows us to get parameters passed in

        return(<RenderDish dish = {this.state.dishes[+dishId]}/>) // The plus changes string into number
    }

}

export default DishDetail;