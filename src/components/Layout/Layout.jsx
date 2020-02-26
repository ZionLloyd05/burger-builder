import React from 'react';
import classes from './Layout.css';
import Hoc from '../Hoc/Hoc';

const Layout = (props) => {
    return (
        <Hoc>
            <div>Toolbar, Sidedrawer, Modal</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Hoc>
    )
}

export default Layout;
