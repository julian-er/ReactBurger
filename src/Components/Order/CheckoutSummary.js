import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button'
import classes from './CheckoutSummary.module.css'


const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Esperamos que te agrade tu comida</h1>
            <div style={{ width:"100%", margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType="Danger"
            clicked={props.checkoutCancelled}> CANCELAR
            </Button>
            <Button 
            btnType="Success"
            clicked={props.checkoutContinue}> CONTINUAR </Button>

        </div>
    )
}

export default CheckoutSummary
