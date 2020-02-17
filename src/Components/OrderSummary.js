import React from 'react'
import Aux from '../hoc/Aux'
import Button from './UI/Button'

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
            <p><strong>Total de tu pedido : $ {props.total}</strong></p>
            <p> Confirmar el pedido </p>
            <Button btnType="Danger" clicked={props.cancel} >
                CANCELAR
            </Button>
            <Button btnType="Success" clicked={props.continue} >
                ACEPTAR
            </Button>
            
        </Aux>
    )
}

export default OrderSummary
