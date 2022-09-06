import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressEnterKey: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnterKey} // деструктуризация пропсов
) => {

    const inputClass = `${error ? s.inputError : s.inputClass}` // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <p>Введитте имя:</p>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={pressEnterKey}/>
            <button onClick={addUser} className={s.buttonClass}>Добавить</button>
            <span>{totalUsers}</span>
            <p className={s.spanError}>{error}</p>
        </div>
    )
}

export default Greeting