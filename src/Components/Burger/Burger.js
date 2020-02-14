import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient'

const Burger = ( props ) => {

    // save a new array whit arrays of state ingredients and mapping that for create a new  BurgerIngredient whit
    // Key and Type(prop of the component)
const transformedIngredients = Object.keys(props.ingredients)
                        .map(ingKey =>{
                            return [...Array(props.ingredients[ingKey])].map((_, i)=> {
                                return <BurgerIngredient key={ingKey + i} type={ingKey}/>
                            });
                        });

    //i need to use reduce() for calculate how many ingredients have for array and i can choose 
    //when display somthing different
let   updatedIngredients= transformedIngredients.reduce((arr, el) => arr.concat(el),[]);

if (updatedIngredients.length === 0){
    updatedIngredients = <p>¡ Comienza por añadir los ingredientes !</p>
}

    

    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {updatedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;