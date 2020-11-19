import React from "react";
import StyledButton from "./styled";

export default (props) => {
    return <StyledButton>
                {props.children}
            </StyledButton>
}