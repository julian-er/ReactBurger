import React, {Component} from 'react'
import Aux from '../hoc/Aux'
import Button from './UI/Button'


class OrderSummary extends Component {

    // UNSAFE_componentWillUpdate(){
    //     console.log('sumary updates')
    // }
    //it's no necesary, it's only for check

    render() {
        const ingredientsSumary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return (
            <li key={ingKey}>
                 <span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {this.props.ingredients[ingKey]}
            </li>)
        });

        return (
        <Aux>
            <h3>Su orden</h3>
            <p>Una rica hamburguesa con los siguientes ingredientes:</p>
            <ul>
                {ingredientsSumary}
            </ul>
            <p><strong>Total de tu pedido : $ {this.props.total}</strong></p>
            <p> Confirmar el pedido </p>
            <Button btnType="Danger" clicked={this.props.cancel} >
                CANCELAR
            </Button>
            <Button btnType="Success" clicked={this.props.continue} >
                ACEPTAR
            </Button>
            
        </Aux>
        )
    }
}



export default OrderSummary




