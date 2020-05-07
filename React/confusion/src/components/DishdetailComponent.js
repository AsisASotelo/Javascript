import React, { Component } from 'react';
import {Card,CardText,CardBody,CardTitle, CardImg, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

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



    function RenderComments({comments}){

            if(comments!=null)
                return (
                    <div className = "col-12 col-md-5 m-1">
                        <ul className="list-unstyled">

                            {comments.map((comment) => {
                                return(
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author}</p>
                                    </li>
                                );
                            })}

                        </ul>
                           


                    </div>
                )
    }

    

    const DishDetail= (props) => {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        
                        <BreadcrumbItem><Link to ="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    
                </div>
                <div className="row">
                        <RenderDish dish = {props.dish}/>
                        <RenderComments comments = {props.comments}/>
                </div>
            </div>
        );
    }

export default DishDetail;