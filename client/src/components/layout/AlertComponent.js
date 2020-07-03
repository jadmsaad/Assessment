import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {Alert} from 'react-bootstrap';
const AlertComponent = ({alerts}) => {
    
    if(alerts.length>0){
        return alerts.map(alert => (
        <Alert key={alert.id} variant={alert.alertVariant}>{alert.message}</Alert>
        ))
    }
    else{
        return null
    }
    
}

AlertComponent.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(AlertComponent)

