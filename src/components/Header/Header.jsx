import React from "react";
import { userTelegram } from "../../hooks/userTelegram";


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