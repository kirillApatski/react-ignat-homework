import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKewDownAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKewDownAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? `${s.input} ${s.error}` : s.input // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onBlur={setNameCallback}
                onKeyDown={onKewDownAddUser}
                className={inputClass}
            />
            <SuperButton
                className={s.btn}
                onClick={addUser}
                disabled={!name}
            >
                add
            </SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <span className={s.errorText}>{error}</span>

        </div>
    )
}

export default Greeting
