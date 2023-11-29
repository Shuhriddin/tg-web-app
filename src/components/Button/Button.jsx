import React from "react";

const Button = () => {
    return (
        <button {...props} className={'button ' + props.className} />
    )
}

export default Button;