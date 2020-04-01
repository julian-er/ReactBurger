import React, { Component } from 'react'
import CheckoutSummary from '../Components/Order/CheckoutSummary'

class Checkout extends Component {

state={
    ingredients:{
        Lechuga:1,
        Carne:1,
        Queso:1,
        Bacon:1,
    }
}

componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients={};
    for (let param of query.entries()){
        ingredients[param[0]]= +param[1];
    }
    this.setState({
        ingredients:ingredients
    })
}

checkoutCancelledHandler= () =>{
    this.props.history.goBack();
}

checkoutContinueHandler = () =>{
    this.props.history.replace('/checkout/contact-data')
}
    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
            </div>
        )
    }
}

export default Checkout
