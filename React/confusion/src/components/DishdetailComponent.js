import React, { Component } from 'react';
import {Card,CardText,CardBody,CardTitle, CardImg} from 'reactstrap';



    function RenderComments(dish){

        if(dish!=null){
            return(
                <div className="col-12 col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    
                    

                </div>
            )
        }
    }

    function RenderDish({dish}){

        console.log("Dish detail render invoked")
        
        
        if(dish !=null){
            return(
                <div className="col-12 col-sm-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt = {dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail= (props) => {

        return(
            <div className="container">
            <div className="row">
                    <RenderDish dish = {props.dish}/>
                    <RenderComments dish = {props.dish}/>
            </div>
            </div>
        );
    }

export default DishDetail;