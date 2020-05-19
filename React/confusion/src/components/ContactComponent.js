import React, { Component } from 'react';

import {Breadcrumb, BreadcrumbItem,Button,Input, Row, FormGroup,Label, Col, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Form, Errors, actions} from 'react-redux-form';


const required= (val) => val && val.length;
const maxLength=(len) => (val) => !(val) || (val.length <= len); //Ensures that length is less than or equal to
const minLength = (len) => (val) => (val) && (val.length >= len); //Ensures that length is less than or equal to
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)





class Contact extends Component{
    constructor(props){
        super(props);

        

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange=this.handleInputChange.bind(this);
    }

    // React Redux Hanles this

    // handleInputChange(event){
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name

    //     this.setState({
    //         [name]:value

    //     });

    // }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values))
        alert("Current state is: " + JSON.stringify(values))
        this.props.resetFeedbackForm()
        

    }

    handleBlur= (field) =>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }


    // validate(firstname,lastname,telnum,email){
    //     const errors={
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:''


    //     };

    //     if(this.state.touched.firstname && firstname.length<3)
    //         errors.firstname="First Name should be >=3 characters";
    //     else if (this.state.touched.firstname && firstname.length>10)
    //         errors.firstname="First Name should be <=10 characters"

    //     if(this.state.touched.lastname && lastname.length<3)
    //         errors.lastname="Last Name should be >=3 characters";
    //     else if (this.state.touched.firstname && firstname.length>10)
    //         errors.lastname="Last Name should be <=10 characters"

    //     const reg = /^\d+$/;
    //     if(this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum='Tel. Number should contain only numbers'
        

    //     if(this.state.touched.email && email.split('').filter(x => x==='@'.length !== 1))
    //         errors.email="Email should contain an @ sign."


    //     return errors;
    // }






    render(){

        // const errors=this.validate(this.state.firstname, this.state.lastname,this.state.telnum, this.state.email)

        return(
            <div className="container">
                <Breadcrumb>
                            <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                </div>
    
    
    
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">

                        <Form model="feedback" onSubmit = {(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>FirstName</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required ,minLength:minLength(3),maxLength: maxLength(15)
                                    }}
                                    // value={this.state.firstname}
                                    // valid={errors.firstname==''}
                                    // invalid={errors.firstname !==''} 
                                    // onBlur={this.handleBlur('firstname')}
                                    // onChange={this.handleInputChange}
                                    />

                                    <Errors 
                                    classname="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be greater than 2 charactors',
                                        maxLength: 'Must be 15 characters or less'

                                    }}
                                    />
                                    {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>LastName</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={{
                                        required ,minLength:minLength(3),maxLength: maxLength(15)
                                    }}
                                    // value={this.state.lastname}
                                    // valid={errors.lastname==''}
                                    // invalid={errors.lastname !==''} 
                                    // onBlur={this.handleBlur('lastname')} 
                                    // onChange={this.handleInputChange}
                                    />
                                    <Errors 
                                    classname="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be greater than 2 charactors',
                                        maxLength: 'Must be 15 characters or less'

                                    }}
                                    />
                                    {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Telephone</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={{
                                        required ,minlength: minLength(3),maxLength: maxLength(15), isNumber

                                    }}
                                    // value={this.state.telnum}
                                    // valid={errors.telnum==''}
                                    // invalid={errors.telnum !==''} 
                                    // onBlur={this.handleBlur('telnum')}
                                    // onChange={this.handleInputChange}
                                    />

                                    <Errors 
                                    classname="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'

                                    }}
                                    />
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email"id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required , validEmail

                                    }}
                                    // value={this.state.email}
                                    // onBlur={this.handleBlur('email')} 
                                    // onChange={this.handleInputChange}
                                    />
                                    <Errors 
                                    classname="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validEmail:"Invalid Email Address"
                                 

                                    }}
                                    />
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" type="checkbox" name="agree"
                                                className ="form-check-input"
                                                // checked={this.state.agree}
                                                // onChange={this.handleInputChange}
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control"
                                        // value={this.state.contactType}
                                        // onChange={this.handleInputChange}
                                        >

                                            <option>Tel.</option>
                                            <option>Email</option>

                                    </Control.select>
                                    
                                </Col>
                            </Row>
                            <Row className="form-group"p>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message"id="message" name="message"
                                    placeholder="Email"
                                    className="form-control"
                                    // values={this.state.message}
                                    // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">

                                <Col md={{size:10, offset:2}}/>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>

                            </Row>
                            
                        </Form>


                    </div>
                </div>



            </div>
        );

    }

    
}

export default Contact;