import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            {/*// add NavLinks*/}
            <NavLink to={'/pre-junior'} style={{paddingRight: '20px'}}>PreJunior</NavLink>
            <NavLink to={'/junior'} style={{paddingRight: '20px'}}>Junior</NavLink>
            <NavLink to={'/middle'} style={{paddingRight: '20px'}}>Middle</NavLink>
            <NavLink to={'/senior'} style={{paddingRight: '20px'}}>Senior</NavLink>
        </div>
    )
}

export default Header
