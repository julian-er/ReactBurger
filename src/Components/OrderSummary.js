import React from 'react'
import Aux from '../hoc/Aux'

const OrderSummary = (props) => {

    const ingredientsSumary = Object.keys(props.ingredients)
                        .map(ingKey => {
                            return (
                            <li key={ingKey}>
                                 <span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}
                            </li>)
                        });

    return (
        <Aux>
            <h3>Su orden</h3>
            <p>Una rica hamburguesa con los siguientes ingredientes:</p>
            <ul>
                {ingredientsSumary}
            </ul>
            <p> Confirmar el pedido </p>
            
        </Aux>
    )
}

export default OrderSummary
