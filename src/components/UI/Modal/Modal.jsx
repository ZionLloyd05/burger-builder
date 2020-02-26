import React from 'react'
import classes from './Modal.css';

const Modal = (props) => {
    return (
        <div className={classes.Modal}>
            {props.childen}
        </div>
    )
}

export default Modal;