import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import { v1 } from 'uuid';
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        error && setError('');
    }

    let trimName = name.trim();

    const addUser = () => {
          if (trimName) {
            addUserCallback(name)
            alert(`Hello, ${trimName}!`);
            setName('');
        } else {
            setName('');
            setError('Поле обязательно для заполнения!');
        }
    }

    const pressEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === "Enter" && name? addUser() : ''
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressEnterKey={pressEnterKey}
        />
    )
}

export default GreetingContainer