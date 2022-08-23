import React from 'react'
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div className={classes.affairs}>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
