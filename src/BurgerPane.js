import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {

    return (
        <div>
            <h1>Burger:</h1>
            <BurgerStack ingredients={props.ingredient}/>
            <ClearBurger />
        </div>
    )
}

export default BurgerPane