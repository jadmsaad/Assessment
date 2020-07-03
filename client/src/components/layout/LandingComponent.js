import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import {Container, Button} from 'react-bootstrap'

const LandingComponent = () => {


  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          
          <h1 >Providing marketing insights for your business</h1>
          <h4 >
            Create a business analytics dashboard
          </h4>
          <Container >
            <Button as={Link} to="/register" variant="primary" className="m-1" >
              Register
            </Button>
            <Button as={Link} to="/login" variant="secondary" className="m-1">
              Login
            </Button>
          </Container>
        </div>
      </div>
    </section>
  );
};



export default LandingComponent;