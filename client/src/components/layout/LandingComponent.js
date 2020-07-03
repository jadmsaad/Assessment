import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

const LandingComponent = () => {


  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          
          <h1 className="x-large">Providing marketing insights for your business</h1>
          <p className="lead">
            Create a business analytics dashboard
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



export default LandingComponent;