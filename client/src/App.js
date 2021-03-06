import React, {Fragment, useEffect} from 'react';
import NavbarComponent from './components/layout/NavbarComponent'
import LandingComponent from './components/layout/LandingComponent'
import RegisterComponent from './components/auth/RegisterComponent'
import LoginComponent from './components/auth/LoginComponent'
// import AlertComponent from './components/layout/AlertComponent'
import AlertModal from './components/layout/AlertModal'
import AboutComponent from './components/business/AboutComponent'
import ContactComponent from './components/business/ContactComponent'
import './App.css';
import PrivateRouteComponent from './components/routing/PrivateRouteComponent'
import EditUserComponent from './components/auth/EditUserComponent'
import DashboardComponent from './components/dashboard/DashboarComponent'
import NotFoundComponent from './components/layout/NotFoundComponent'
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {loadUser} from './actions/auth'
import store from './store'
//Redux

import {Provider} from 'react-redux';



const App = ()=> {



  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  
return (
<Provider store ={store}>
    <Router>
      <Fragment>
        <NavbarComponent/>
        
        
        <AlertModal/>
          
            <Switch>
              <Route exact path='/' component={LandingComponent}/>
              <Container>
              <Switch>
              
              <Route exact path ='/register' component ={RegisterComponent}/>
              <Route exact path ='/login' component ={LoginComponent}/>
              <Route exact path ='/about' component ={AboutComponent}/>
              <Route exact path ='/contact' component ={ContactComponent}/>
              <PrivateRouteComponent exact path="/dashboard" component={DashboardComponent} />
              <PrivateRouteComponent exact path="/edituser" component={EditUserComponent} />
              <Route component={NotFoundComponent} />
              </Switch>
              </Container>
            </Switch>
           
          
         
      </Fragment>
    </Router>
</Provider>
  
)
}
export default App;
