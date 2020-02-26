import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p className="totalPrice">Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            <div>
                {controls.map(ctrl => (
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} />
                ))}
            </div>
            <div>
                <button 
                    className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.ordered}
                >ORDER NOW</button>
            </div>
        </div>
    )
}

export default BuildControls;