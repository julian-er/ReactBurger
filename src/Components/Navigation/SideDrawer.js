import React from 'react'
import Logo from '../Logo'
import NavigationItems from '../Navigation/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../UI/Backdrop'
import Aux from '../../hoc/Aux'

const SideDrawer = (props) => {
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
            
        </div>
        </Aux>
    )
}

export default SideDrawer
