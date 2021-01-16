import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  line-height: 130%;
  padding: 12px 22px;
  border: 2px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonBorder};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 24px;
    `}
  ${(props) =>
    props.plain &&
    css`
      padding: 12px 22px;
      color: ${({ theme }) => theme.color.white};
      border: none;
      background-color: ${({ theme }) => theme.color.charade};
      &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    `}
`;

export default Button;
