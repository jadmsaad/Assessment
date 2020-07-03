import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

const NavbarComponent = ({isAuthenticated, loading,logout}) => {

  const handleLogout = () => logout();

  const authLinks = (
    <React.Fragment>
    <Nav className="mr-auto">
    
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
          
  </Nav>
  <Nav>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <NavDropdown title="User" id="basic-nav-dropdown" variant="dark">
        <NavDropdown.Item as={Link} to="edituser" variant="dark">Edit user info</NavDropdown.Item>        
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={ () => handleLogout()}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </React.Fragment>
  );

  const guestLinks = (
    <React.Fragment>
      <Nav className="mr-auto">
        
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

        
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/Register">Register</Nav.Link>
    </Nav>
  </React.Fragment>
  );


    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {!loading && (
        <React.Fragment>{isAuthenticated ? authLinks : guestLinks}</React.Fragment>
      )}

      </Navbar.Collapse>

    </Navbar>
    )
}

NavbarComponent.propTypes = {

  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}



const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);
