import React from 'react';
import classes from './Modal.css';
import Hoc from '../../Hoc/Hoc';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => {
    return (
        <Hoc>
            <BackDrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                >
                {props.children}
            </div>
        </Hoc>
    )
}

export default Modal;