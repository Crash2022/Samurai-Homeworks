import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = `${error ? s.error : s.inputClass}` // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <p className={s.spanError}>{error}</p>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} className={s.buttonClass}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
