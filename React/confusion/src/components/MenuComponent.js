import React, { Component } from 'react';
import {Card,CardImgOverlay,CardTitle, CardImg} from 'reactstrap';


class Menu extends Component {
    

    componentDidMount(){
        console.log("Menu component DidMount")
    }

    render(){
        console.log("Menu render DidMount")

        const menu =this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}> 
                       
                        <CardImg width="100%" src={dish.image} alt = {dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div> // You must assign a key to each item
                    
            );
        });
        
        return(

            

            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );


    }
}

export default Menu;