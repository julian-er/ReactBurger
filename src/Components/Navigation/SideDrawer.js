import React from 'react'
import Logo from '../Logo'
import NavigationItems from '../Navigation/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../UI/Backdrop'
import Aux from '../../hoc/Aux'

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]

    if (props.open){
    attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
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
