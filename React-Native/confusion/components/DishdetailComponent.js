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

function DishDetail(props) {

    return(<RenderDish dish = {props.dish}/>)

}

export default DishDetail;