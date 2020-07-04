import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Col,  Jumbotron} from 'react-bootstrap'
import {addAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

const RegisterComponent = ({addAlert,register, isAuthenticated}) =>{




const [formData, setFormData] = useState ({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
})

const {first_name,last_name,username,email,password,password2} = formData;


const handleChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value})

const handleSubmit = e => {
      e.preventDefault();
      
      if(password !== password2){
          addAlert("passwords do not match","danger");
          console.log('entered')
      }
      else{
        register(formData)
      }
      
  }

  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
}

    return (
    
    <Jumbotron className="m-5">
        <h1>Create User Account</h1>
        <Form onSubmit= {e=> handleSubmit(e)}>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
             type="text"
              placeholder="Enter first name"
              name="first_name"
              value={first_name}
              onChange={e=> handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
             type="text"
              placeholder="Enter last name"
              name="last_name"
              value={last_name}
              onChange={e=> handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
             type="text"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={e=> handleChange(e)}
               />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
             type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e=> handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e=> handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword2">

            <Form.Label>Confirm password</Form.Label>
            <Form.Control
             type="password"
              placeholder="Enter password again"
              name="password2"
              value={password2}
              onChange={e=> handleChange(e)}
              />
            </Form.Group>
        </Form.Row>







        


        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Jumbotron>
    
    )
}

RegisterComponent.propTypes = {
    addAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}
const mapDispatchToProps = {
    addAlert,
    register
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent)

