import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
function Header() {
    const [menuActive, setMenuActive] = useState(false)
    const menu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div className={s.wrapContent}>
            <div className={s.menu} onClick={menu}>{ !menuActive ? 'Click!' : "X"}</div>
            <div className={!menuActive ? s.wrapLink : `${s.wrapLink} ${s.wrapLinkActive}`}>
                <NavLink className={({isActive}) => isActive ? s.active : s.headerItem} to={"/pre-junior"}>pre-junior</NavLink>
                <NavLink className={({isActive}) => isActive ? s.active : s.headerItem } to={"/junior"}>junior</NavLink>
                <NavLink className={({isActive}) => isActive ? s.active : s.headerItem } to={"/junior-plus"}>junior-plus</NavLink>
            </div>
        </div>
    )
}

export default Header
