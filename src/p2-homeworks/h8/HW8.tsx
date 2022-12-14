import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
    //const [state, dispatch] = useReducer(homeWorkReducer, initialPeople)

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_UP', payload: 'up'}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_DOWN', payload: 'down'}));
    const filterAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK_AGE_LESS_18', minAge: 18}));

    return (
        <div>
            <hr/>
            <div style={{marginLeft: '10px'}}>
                homeworks 8

                {/*should work (должно работать)*/}
                {finalPeople}

                {/*<div><SuperButton onClick={()=>dispatch({type: 'SORT_UP', payload: 'up'})}>sort up</SuperButton></div>*/}

                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={filterAge}>filter age</SuperButton></div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8