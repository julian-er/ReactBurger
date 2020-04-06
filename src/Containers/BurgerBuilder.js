import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import Burger from '../Components/Burger/Burger'
import BurgerControls from '../Components/Burger/BuildControls'
import Modal from '../Components/UI/Modal'
import OrderSumary from '../Components/OrderSummary'
import axios from '../Axios-orders'
import Spinner from '../Components/UI/Spinner'
import WhitErrorHandler from '../hoc/WhitErrorHandler'


const INGREDIENT_PRICES = {
    Lechuga : 5,
    Queso : 10,
    Carne: 20,
    Bacon: 15,
}

class BurgerBuilder extends Component {
    state = {
        ingredients:null,
        totalPrice: 4,
        purcharsable: false,
        purchasing: false,
        loading:false,
        error:false,
    }


// for fetching data before the component render the best way is using componentDidMount
componentDidMount(){
    axios.get('https://burgerbuilder-815f6.firebaseio.com/ingredients.json')
        .then(response =>{
            this.setState({
                ingredients: response.data
            })
        })
        .catch(err=>{
            this.setState({
                error: true
            })
        })
}



// i need to call this function in add and remove handlers and agree the updated state for 
// use more recently state
updatePurcharsState (ingredients) {

    const sum = Object.keys(ingredients)
                .map(ingKey =>{
                    return ingredients[ingKey];
                })
    let sumed = sum.reduce((sum, el)=>{
        return sum + el
    },0)

    this.setState({purcharsable: sumed > 0})
}

addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice:newPrice, ingredients: updatedIngredients });
    this.updatePurcharsState(updatedIngredients);
}


removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
        return;
    }
    const updatedCount = oldCount -1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;

    this.setState({ totalPrice:newPrice, ingredients: updatedIngredients });
    this.updatePurcharsState(updatedIngredients);
}

purchaseHandler = () => {
    this.setState({purchasing : true})
}

modalCloseHandler = () => {
    this.setState({purchasing : false})
}

purchaseCancelHandler = () => {
    this.setState({purchasing:false})
}

purchaseContinueHandler = () => {

    // i coment that because now i went to go to the checkout component
    
    
    // this.setState({
    //     loading:true,
    // })
    // //alert ('Estas comprando')
    // const order={
    //     ingredients:this.state.ingredients,
    //     price: this.state.totalPrice,
    //     costumer:{
    //         name: 'Julian',
    //         address: {
    //             street: 'pueyrredon',
    //             zipCode: '2000',
    //             country: 'Argentina'
    //         },
    //         deliveryMethod:'fastest',
    //     }
    // }
    // axios.post('/orders.json', order)
    // .then(response => {
    //     this.setState({
    //         loading:false,
    //         purchasing:false,
    //     })
    //     })
    // .catch(err => {
    //     this.setState({
    //         loading:false,
    //         purchasing:false,
    //     })
    //     console.log(err)})

    const queryParams = []
    for (let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
    };
    queryParams.push('price='+ this.state.totalPrice)
    const queryString  =queryParams.join('&');
    this.props.history.push({
        pathname:'/checkout',
        search:'?'+ queryString
    });
}



    render() {

        //i agree this for disable button when i don't have nothing to substract and
        //create new variable for using state and no modify that
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }

        // for this action to be displayed, I have to update "shouldComponentUpdate" in modal.js
        // because we stay updated modal only when props.show change
        // i use this variable for display the spinner or modal when it's necesary

        let orderSumary=null

        // Show spinner or burguer when the ingredients stay load

        let hamburguer=this.state.error?<p>Ingedients can't be loaded</p> : <Spinner />;

        if (this.state.ingredients){
            hamburguer=(<Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                ingredientsAdd={this.addIngredientHandler}
                ingredientsRemove={this.removeIngredientHandler}
                disabled = {disabledInfo}
                purcharsable = {this.state.purcharsable}
                price = {this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </Aux>);
            orderSumary=<OrderSumary 
            ingredients={this.state.ingredients} 
            continue={this.purchaseContinueHandler} 
            cancel={this.purchaseCancelHandler} 
            total={this.state.totalPrice}
            />;
        }
        
        if (this.state.loading){
            orderSumary=<Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.modalCloseHandler}>
                    {orderSumary}
                </Modal>
                {hamburguer}
            </Aux>
        );
    }
}


export default WhitErrorHandler(BurgerBuilder, axios);