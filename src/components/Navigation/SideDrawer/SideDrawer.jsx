import React from 'react'
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hoc from '../../Hoc/Hoc';
import BackDrop from '../../UI/BackDrop/BackDrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Hoc>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Hoc>
    )
}

export default SideDrawer;