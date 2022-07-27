import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.container}>
            <div className={s.itemName}>
                {props.affair.name}
            </div>
            <div className={s.itemSkill}>
                {props.affair.priority}
            </div>
            <div>
                <button className={s.btn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
