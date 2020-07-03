import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Col, Jumbotron} from 'react-bootstrap'
import {login} from '../../actions/auth'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";


const  LoginComponent = ({login, isAuthenticated}) => {



    

    const [formData, setFormData] = useState({

        username: "",
        password: ""

      });

      const { username, password } = formData;

      const handleChange = e => setFormData({
          ...formData, [e.target.name]: e.target.value})


    const handleSubmit = e => {
        e.preventDefault();
        login(formData);
    }

    if(isAuthenticated){
        return <Redirect to="/"/>
     }

    return (

        <Jumbotron>
        <h1>Sign-In</h1>
        <Form onSubmit= {e => handleSubmit(e)}>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter username" 
            name="username"
            value={username}
            onChange={e=> handleChange(e)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password"
             placeholder="Password"
             name="password"
             value={password}
             onChange={e=> handleChange(e)} />
            </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
    </Jumbotron>

    )
}

LoginComponent.propTypes = {
    login: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    login
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)

