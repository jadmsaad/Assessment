import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Col,  Jumbotron} from 'react-bootstrap'

import {update, loadUser} from '../../actions/auth'
import {connect} from 'react-redux'

const EditUserComponent = ({update, auth:{user, loading},loadUser}) =>{




const [formData, setFormData] = useState ({
    first_name: "",
    last_name: "",
    username: "",
    email: ""
})


useEffect( ({user}) => {
     loadUser();
    setFormData({
        first_name: loading || !user.first_name ? "" : user.first_name,
        last_name: loading || !user.last_name ? "" : user.last_name,
        username: loading || !user.username ? "" : user.username,
        email: loading || !user.email ? "" : user.email,
    })
},[loading,loadUser])


const {first_name,last_name,username,email} = formData;


const handleChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value})

const handleSubmit = e => {
      e.preventDefault();          
        update(formData)   
    
      
  }



    return (
    
    <Jumbotron className="m-5">
        <h1>Edit User Info</h1>
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

        </Form.Row>


{/* 
        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group> */}







        <Button variant="primary" type="submit">
            Edit
        </Button>
        </Form>
    </Jumbotron>
    
    )
}

EditUserComponent.propTypes = {
    addAlert: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}
const mapDispatchToProps = {
        update,
        loadUser
}

const mapStateToProps = state => ({
    auth: state.auth,
    loading: state.auth.loading

  });

export default connect(mapStateToProps,mapDispatchToProps)(EditUserComponent)

