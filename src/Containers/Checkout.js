import React, { Component } from 'react'
import CheckoutSummary from '../Components/Order/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from './ContactData'

class Checkout extends Component {

state={
    ingredients:null,
    totalPrice:0
}

UNSAFE_componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients={};
    let price;
    for (let param of query.entries()){
        if (param[0]=== 'price'){
        price = param[1];    
        }else{
        ingredients[param[0]]= +param[1];
        }
       
    }
    this.setState({
        ingredients:ingredients,
        totalPrice:price
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
                <Route 
                exact
                path={this.props.match.path + '/contact-data'} 
                render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}/>
                {/*i pass props for obtain history in to the component*/}
            </div>
        )
    }
}

export default Checkout
