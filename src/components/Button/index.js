import React from "react";
import StyledButton from "./styled";

const Button = ({children, onClick}) => {
    return <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
}
export default Button;