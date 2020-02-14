import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import Burger from '../Components/Burger/Burger'
import BurgerControls from '../Components/Burger/BuildControls'


const INGREDIENT_PRICES = {
    salad : 5,
    cheese : 10,
    meat: 20,
    bacon: 15,
}

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4
    }


addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({ totalPrice:newPrice, ingredients: updatedIngredients })
}

removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount -1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceSubtraction

    this.setState({ totalPrice:newPrice, ingredients: updatedIngredients })
}

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                ingredientsAdd={this.addIngredientHandler}
                ingredientsRemove={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}


export default BurgerBuilder;