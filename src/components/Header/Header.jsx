import React from "react";

const Header = () => {
    const tg = window.Telegram.WebApp;
    
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="header">
            <Button onClick={onClose}>Закрить</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>

        </div>
    )
}

export default Header;