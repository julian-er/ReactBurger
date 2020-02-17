import React, { Component } from 'react'
import Aux from '../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Components/Navigation/Toolbar'
import SideDrawer from '../Components/Navigation/SideDrawer'



 class Layout extends Component {

state = {
    isOpen : true,
}


sideDrawerClosedHandler = () => {

    this.setState({isOpen: false})

}
    render() {
        return (
            <Aux>
            <Toolbar/>
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