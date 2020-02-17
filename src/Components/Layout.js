import React, { Component } from 'react'
import Aux from '../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Components/Navigation/Toolbar'
import SideDrawer from '../Components/Navigation/SideDrawer'



 class Layout extends Component {

state = {
    isOpen : false,
}


sideDrawerClosedHandler = () => {

    this.setState({isOpen: false})

}

sideDrawerOpenHandler = () => {

    this.setState((prevState)=> {
        return {isOpen: !prevState.isOpen}
    })

}
    render() {
        return (
            <Aux>
            <Toolbar click={this.sideDrawerOpenHandler}/>
            <SideDrawer 
            open={this.state.isOpen} 
            closed={this.sideDrawerClosedHandler}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>   
        )
    }
}

export default Layout;