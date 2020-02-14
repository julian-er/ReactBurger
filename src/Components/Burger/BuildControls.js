import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl'


// i added into an array all options of buttons and after mapping that for obtain that buttons
const controls = [
    {label: 'Lechuga', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Queso', type: 'cheese'},
    {label: 'Carne', type: 'meat'},
]



const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            
            <p>Current Price:<strong>${props.price}</strong></p>

        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientsAdd(ctrl.type)}
            removed={() => props.ingredientsRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}    
        <button className={classes.OrderButton} 
        disabled={!props.purcharsable}
        onClick={props.ordered}
        >COMPRAR</button>
        </div>
    )
}

export default BuildControls
