import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Col, Jumbotron} from 'react-bootstrap'

const ContactComponent = (props) => {
    return (
        <Jumbotron className="m-5">
        <h1>Tell us about it</h1>
        <Form >

        <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Your name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name"
            
             />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Your email</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter email" 
            name="email"
            
             />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
            type="password"
             placeholder="Enter subject"
             name="password"
             
             />
            </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
         </Form.Group>
        </Form.Row>

        <Button variant="primary" >
            Send
        </Button>
        </Form>
    </Jumbotron>
    )
}

ContactComponent.propTypes = {

}

export default ContactComponent

