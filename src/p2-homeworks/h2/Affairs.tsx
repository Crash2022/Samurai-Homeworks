import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterValue: FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            id={a._id}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <>
            <div className={classes.affairs}>
                <table>
                    {mappedAffairs}
                </table>
                <div className={classes.filterButtons}>
                    <button onClick={setAll} className={classes.button}>All</button>
                    <button onClick={setHigh} className={classes.button}>High</button>
                    <button onClick={setMiddle} className={classes.button}>Middle</button>
                    <button onClick={setLow} className={classes.button}>Low</button>
                </div>
            </div>
        </>
    )
}

export default Affairs
