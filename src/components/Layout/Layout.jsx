import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Sidedrawer, Modal</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;
