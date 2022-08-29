import React from 'react'
import classes from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
    id: number
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix

    const priorityClass = classes[props.affair.priority]

    return (
        <>
            {/*<div className={classes.affairs_items}>
                <div className={classes.affairs_items_name}>
                    {props.affair.name}
                </div>
                <div className={classes.affairs_items_priority}>
                    {props.affair.priority}
                </div>
                <div className={classes.affairs_items_buttonStyle}>
                    <button onClick={deleteCallback}>X</button>
                </div>
            </div>*/}

            <tbody>
            <tr>
                <td style={{paddingRight: "20px"}}>{props.affair.name}</td>
                <td style={{paddingRight: "10px"}} className={priorityClass}>{props.affair.priority}</td>
                <td><button onClick={deleteCallback} className={classes.affairs_items_buttonStyle}>X</button></td>
            </tr>
            </tbody>

        </>
    )
}

export default Affair
