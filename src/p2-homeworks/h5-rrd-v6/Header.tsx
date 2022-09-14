import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
//import '../../p1-main/m1-ui/u1-app/App.css'

function Header() {
    return (
        <>
        <div className={style.header}>
            <div className={style.headerMenu}>
                Меню
            </div>
            <div className={style.headerLinks}>
                {/*// add NavLinks*/}
                <NavLink to={'/pre-junior'}
                         /*style={(params) => {
                             return {color: params.isActive ? 'orange' : 'black'}
                         }}*/
                         className={ ({isActive}) => isActive ? style.act : style.def }
                >
                    PreJunior
                </NavLink>
                <NavLink to={'/junior'}
                         className={ ({isActive}) => isActive ? style.act : style.def }
                >
                    Junior
                </NavLink>
                <NavLink to={'/middle'}
                         className={ ({isActive}) => isActive ? style.act : style.def }
                >
                    Middle
                </NavLink>
                <NavLink to={'/senior'}
                         className={ ({isActive}) => isActive ? style.act : style.def }
                >
                    Senior
                </NavLink>
            </div>
        </div>
        <div className={style.sliderMenu}>
            <NavLink to={'/pre-junior'}
                /*style={(params) => {
                    return {color: params.isActive ? 'orange' : ''}
                }}*/
                     className={ ({isActive}) => isActive ? style.act2 : style.def2 }
            >
                PreJunior
            </NavLink>
            <NavLink to={'/junior'} className={ ({isActive}) => isActive ? style.act2 : style.def2 }>Junior</NavLink>
            <NavLink to={'/middle'} className={ ({isActive}) => isActive ? style.act2 : style.def2 }>Middle</NavLink>
            <NavLink to={'/senior'} className={ ({isActive}) => isActive ? style.act2 : style.def2 }>Senior</NavLink>
            <span>Меню</span>
        </div>
        </>
    )
}

export default Header