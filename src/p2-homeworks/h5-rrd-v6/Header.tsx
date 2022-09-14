import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

function Header() {
    return (
        <>
        <div className={style.header}>
            <div className={style.headerMenu}>
                Меню
            </div>
            <div className={style.headerLinks}>
                {/*// add NavLinks*/}
                <NavLink to={'/pre-junior'}>PreJunior</NavLink>
                <NavLink to={'/junior'}>Junior</NavLink>
                <NavLink to={'/middle'}>Middle</NavLink>
                <NavLink to={'/senior'}>Senior</NavLink>
            </div>
        </div>
        <div className={style.sliderMenu}>
            <NavLink to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink to={'/junior'}>Junior</NavLink>
            <NavLink to={'/middle'}>Middle</NavLink>
            <NavLink to={'/senior'}>Senior</NavLink>
            <span>Меню</span>
        </div>
        </>
    )
}

export default Header
