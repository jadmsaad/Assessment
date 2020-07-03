import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {Alert, Modal,Button} from 'react-bootstrap';
import {clearAlerts} from '../../actions/alert'
const AlertComponent = ({alerts,clearAlerts}) => {


const [show, setShow] = useState(alerts.length>0? true: false);

const handleClose = () =>{
    clearAlerts();
    setShow(false);
} 
// const handleShow = () => setShow(true);




    if(alerts.length>0){

        return (
            <>
    
            <Modal show={alerts.length>0} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Oops!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    {alerts.map(alert => (
                    <Alert key={alert.id} variant={alert.alertVariant}>{alert.message}</Alert>
                    ))}
              </Modal.Body>
              <Modal.Footer>    
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
        
        

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

export default connect(mapStateToProps,{clearAlerts})(AlertComponent)

