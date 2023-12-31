import React from "react";
import { userTelegram } from "../../hooks/userTelegram";
import Button from "../Button/Button";
import './Header.css';


const Header = () => {
    const {user, onClose} = userTelegram()


    return (
        <div className="header">
            <Button onClick={onClose}>Закрить</Button>
            <span className={'username'}>
                {user?.username}
            </span>

        </div>
    )
}

export default Header;