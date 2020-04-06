import React, { Component } from 'react'
import Button from '../Components/UI/Button'
import classes from './ContacData.module.css'
import axios from '../Axios-orders'
import Spinner from '../Components/UI/Spinner'


class ContactData extends Component {
    state = {
        name:'',
        email:'',
        adress:{
            street:'',
            number:''
        },
        loading:false,
    }

orderHandler = (event) => {
    event.preventDefault(); // i need to prevent default because it's reload my page
    
    this.setState({
        loading:true,
    })
    //alert ('Estas comprando')
    const order={
        ingredients:this.props.ingredients,
        price: this.props.price,
        costumer:{
            name: 'Julian',
            address: {
                street: 'pueyrredon',
                zipCode: '2000',
                country: 'Argentina'
            },
            deliveryMethod:'fastest',
        }
    }
    axios.post('/orders.json', order)
    .then(response => {
        this.setState({
            loading:false,
        })
        this.props.history.push('/')
        })
    .catch(err => {
        this.setState({
            loading:false,
        })
        console.log(err)})
}

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Nombre" />
            <input className={classes.Input} type="email" name="email" placeholder="Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Calle" />
            <input className={classes.Input} type="text" name="number" placeholder="Numero / Dpto." />
            <Button btnType="Success" clicked={this.orderHandler}>ORDENAR</Button>
        </form>);
        if (this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Por favor ingresa tus datos de contacto</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
