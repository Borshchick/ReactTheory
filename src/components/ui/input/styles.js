import { styled } from "styled-components";

export const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    row-gap: 30px;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
`

export const ShowpasswordButton = styled.button`
    position: absolute;
    right: 0;
    border: none;
    transition: .3s;
    background-color: black;
    color: white;
    border-radius: 20px;
    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }
`

export const PasswordWrapper = styled.div`
    position: relative;
`